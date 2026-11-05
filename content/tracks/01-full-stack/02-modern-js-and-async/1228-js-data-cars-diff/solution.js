export function priceKChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.priceK]));
  return after.filter((x) => old.get(x.id) !== x.priceK).map((x) => x.id);
}
