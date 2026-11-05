export function yearChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.year]));
  return after.filter((x) => old.get(x.id) !== x.year).map((x) => x.id);
}
