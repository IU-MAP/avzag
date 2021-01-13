import { ref } from "vue";

export let key: symbol;

export const root = process.env.BASE_URL + "lects/";
export const lects = ref([] as string[]);

export function setupStore(_lects: string[]) {
  lects.value = _lects;
  key = Symbol("lects");
}

export async function loadJSON(filename: string) {
  return await fetch(root + filename + ".json")
    .then((r) => r.json())
    .catch(() => undefined);
}
export async function loadLectsJSON<T>(filename: string) {
  const files = {} as Record<string, T | undefined>;
  for (const lect of lects.value) {
    const file = await loadJSON(lect + "/" + filename);
    files[lect] = file;
  }
  return files;
}
