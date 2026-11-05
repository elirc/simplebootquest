export function priceChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.price]));
  return after.filter((x) => old.get(x.id) !== x.price).map((x) => x.id);
}
