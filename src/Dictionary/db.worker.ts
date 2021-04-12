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
  const lects = Object.keys(dictionaries);
  const tx = db.transaction(lects, "readwrite");
  for (const l of lects) {
    postMessage(JSON.stringify({ state: "loading", lects: l }));
    const st = tx.objectStore(l);
    const puts = [];
    for (const d of dictionaries[l])
      puts.push(st.add(d /* , d.forms[0].text.plain */));
    await Promise.all(puts);
  }
}

async function load(lects: string[]) {
  postState("fetching");
  const dictionaries = await loadLectsJSON<Entry[]>("dictionary", lects);
  lects = Object.keys(dictionaries);
  postState("fetched", lects);

  postState("preparing");
  await cleanDB(lects);
  await fillDB(dictionaries);
  postState("ready");
}

function postState(state: DBWorkerState, lects: string | string[] = "") {
  postMessage(JSON.stringify({ state, lects }));
}

onmessage = ({ data }) => load(JSON.parse(data));
