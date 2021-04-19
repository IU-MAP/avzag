import { Entry, SearchCommand } from "./types";
import { IDBPDatabase, openDB } from "idb";

let db: IDBPDatabase;
let lects: string[];
let key: symbol;

function checkTag(entry: Entry, tag: string) {
  tag = tag.substr(1);
  return entry.tags?.includes(tag)
    ? true
    : entry.concepts.find((c) => c.tags?.includes(tag))?.meaning;
}

function checkSegment(area: string, segment: string) {
  switch (segment[0]) {
    case "*":
      return area === segment.substr(1);
    case "+":
      return area.startsWith(segment.substr(1));
    case "-":
      return area.endsWith(segment.substr(1));
    default:
      return area.includes(segment);
  }
}

function checkQuery(entry: Entry, query: string[][], forms = false) {
  const meanings = new Set<string>();
  for (const qs of query) {
    const ms = new Set<string>();
    for (const q of qs) {
      if (q[0] === "#") {
        const tr = checkTag(entry, q.substr(1));
        if (typeof tr === "string") ms.add(tr);
        else if (!tr) {
          ms.clear();
          break;
        }
      } else if (forms) {
        console.log(
          entry.forms,
          q,
          entry.forms.some((f) => checkSegment(f.plain, q))
        );
        if (entry.forms.some((f) => checkSegment(f.plain, q)))
          entry.concepts.forEach((c) => ms.add(c.meaning));
        else {
          ms.clear();
          break;
        }
      } else {
        const m = entry.concepts
          .map((c) => c.meaning)
          .filter((m) => checkSegment(m, q));
        if (m.length) m.forEach((m) => ms.add(m));
        else {
          ms.clear();
          break;
        }
      }
    }
    if (ms.size) ms.forEach((m) => meanings.add(m));
  }
  return [...meanings];
}

async function queryDictionaries(key_: symbol, query: string[][]) {
  if (!query.length) return;
  async function search(lect: string) {
    let cr = await db.transaction(lect).store.openCursor();
    while (cr) {
      if (key !== key_) return;
      const entry = cr.value as Entry;
      const meanings = checkQuery(entry, query);
      if (meanings.length)
        postMessage(JSON.stringify({ lect, meanings, entry }));
      cr = await cr.continue();
    }
  }
  await Promise.all(lects.map((l) => search(l)));
  if (key !== key_) return;
  postMessage(JSON.stringify({ lect: "" }));
}

async function findMeanings(key_: symbol, lect: string, query: string[][]) {
  // look through all forms in the language and collect their translations.
  const meanings = new Set<string>();
  let cr = await db.transaction(lect).store.openCursor();
  while (cr) {
    if (key !== key_) return [];
    const entry = cr.value as Entry;
    checkQuery(entry, query, true).forEach((m) => meanings.add(m));
    cr = await cr.continue();
  }
  return [...meanings].map((m) => ["*" + m]);
}

onmessage = async (e) => {
  if (e.data === "stop") {
    db?.close();
    key = Symbol("sk");
    return;
  }
  const data = JSON.parse(e.data) as SearchCommand;
  if (Array.isArray(data)) {
    db = await openDB("avzag", 1);
    lects = data;
    return;
  }
  key = Symbol("sk");
  const { lect, query } = { ...data };
  if (lect) queryDictionaries(key, await findMeanings(key, lect, query));
  else queryDictionaries(key, query);
};
