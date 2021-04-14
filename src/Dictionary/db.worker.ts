import { openDB, deleteDB, IDBPDatabase } from "idb";
import { loadLectsJSON } from "@/store";
import { Entry, DBWorkerState } from "./types";

let db: IDBPDatabase;

async function cleanDB(lects: string[]) {
  await deleteDB("avzag");
  db = await openDB("avzag", 1, {
    upgrade(db) {
      lects.forEach((l) => {
        if (db.objectStoreNames.contains(l)) db.deleteObjectStore(l);
        db.createObjectStore(l, { autoIncrement: true });
      });
    },
  });
}

async function fillDB(dictionaries: Record<string, Entry[]>) {
  postState("loading");
  const size = Object.values(dictionaries).reduce((s, d) => s + d.length, 0);
  const step = 1024;
  let done = 0;

  for (const [l, ds] of Object.entries(dictionaries)) {
    const st = db.transaction(l, "readwrite").store;
    const current = ds.length;
    const puts = [];
    for (const d of ds) {
      puts.push(st.add(d));
      if (!(puts.length % step)) {
        done += step;
        const progress = Math.round((done / size) * 100);
        postState(
          "loading",
          `[${progress}%] Loading ${l} - ${puts.length} of ${current}`
        );
      }
    }
    await Promise.all(puts);
  }
}

async function load(lects: string[]) {
  postState("fetching", "Downloading files");
  const dictionaries = await loadLectsJSON<Entry[]>("dictionary", lects);
  lects = Object.keys(dictionaries);
  postState("fetched", lects.toString());

  postState("preparing", "Preparing database");
  await cleanDB(lects);
  await fillDB(dictionaries);
  postState("ready");
}

function postState(state: DBWorkerState, text: string | string[] = "Loading") {
  postMessage(JSON.stringify({ state, text }));
}

onmessage = ({ data }) => load(JSON.parse(data));