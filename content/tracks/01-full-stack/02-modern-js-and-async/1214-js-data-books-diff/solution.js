export function pagesChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.pages]));
  return after.filter((x) => old.get(x.id) !== x.pages).map((x) => x.id);
}
