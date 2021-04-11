/* eslint-disable no-unmodified-loop-condition */
import { db, lects_, processing } from "./main";
import { Entry, Search } from "./types";

async function queryDictionaries(query: string[], queryMode: string) {
  function fits(entry: Entry) {
    const area = queryMode === "Tags" ? entry.tags ?? "" : entry.translation;
    return query.some((q) => area?.includes(q));
  }
  function push(entry: Entry, lect: string) {
    const t = entry.translation;
    if (!search[t]) search[t] = {};
    if (!search[t][lect]) search[t][lect] = [];
    search[t][lect].push(entry as Entry);
  }

  const ss_ = ss;
  const search = {} as Search;
  const tx = db.transaction(lects_.value);

  for (const l of lects_.value) {
    console.log("looking in", l, "with", ss === ss_);
    let cr = await tx.objectStore(l).openCursor();
    while (cr && ss === ss_) {
      console.log("looking in", l);
      const entry = cr.value as Entry;
      if (fits(entry)) push(entry, l);
      cr = await cr.continue();
    }
  }
  return search;
}

async function findTranslations(lect: string, query: string[]) {
  const ss_ = ss;
  const translations = new Set<string>();

  let cr = await db.transaction(lect).store.openCursor();
  while (cr && ss === ss_) {
    const { forms, translation } = cr.value as Entry;
    if (forms.some(({ text }) => query.some((q) => text.plain.includes(q))))
      translations.add(translation);
    cr = await cr.continue();
  }

  return [...translations];
}

const ss = Symbol("srch");

export async function search(
  lect: string,
  query: string[],
  queryMode = "Translation"
) {
  if (!db) return {};
  // ss = Symbol("srch");

  processing.searching = true;

  console.log("Started search");
  const results = !lect
    ? await queryDictionaries(query, queryMode)
    : await queryDictionaries(
        await findTranslations(lect, query),
        "Translation"
      );
  console.log("Found", results);

  processing.searching = false;
  return results;
}
