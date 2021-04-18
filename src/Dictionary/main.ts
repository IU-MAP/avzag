import { loadJSON, lects } from "@/store";
import { reactive, shallowRef, watch } from "vue";
import {
  DictionaryMeta,
  DBState,
  Search,
  SearchResult,
  SearchCommand,
} from "./types";
/* eslint-disable import/no-webpack-loader-syntax */
import DBWorker from "worker-loader!./db.worker";
import SearchWorker from "worker-loader!./search.worker";

export const searchworker = new SearchWorker();
searchworker.onmessage = (e) => receiveSearch(e.data);
export const searchInfo = reactive({
  searching: false,
  results: {} as Search,
});

export const dbworker = new DBWorker();
dbworker.onmessage = (e) => {
  const { state, text } = JSON.parse(e.data);
  connectDB(state, text);
};
export const dbInfo = reactive({
  state: "loading" as DBState,
  text: "",
});

export const dictionaryMeta = shallowRef<DictionaryMeta>();
export const lects_ = shallowRef([] as string[]);

watch(lects, async () => {
  dictionaryMeta.value = await loadJSON("dictionary");
  dbworker.postMessage(JSON.stringify(lects.value));
});

export async function startSearch(command: SearchCommand) {
  searchInfo.searching = true;
  searchInfo.results = {};
  searchworker.postMessage(JSON.stringify(command));
}

async function receiveSearch(data: string) {
  // add the word to the result under its translation.
  const { lect, entry } = JSON.parse(data) as SearchResult;
  if (!lect) {
    searchInfo.searching = false;
    return;
  }
  const t = entry.translation;
  if (!searchInfo.results[t]) searchInfo.results[t] = {};
  if (!searchInfo.results[t][lect]) searchInfo.results[t][lect] = [];
  searchInfo.results[t][lect].push(entry);
}

async function connectDB(state: DBState, text: string) {
  dbInfo.state = state;
  if (state === "fetched") lects_.value = text.split(",");
  else {
    dbInfo.text = text;
    if (state === "ready")
      searchworker.postMessage(JSON.stringify(lects_.value));
  }
}
