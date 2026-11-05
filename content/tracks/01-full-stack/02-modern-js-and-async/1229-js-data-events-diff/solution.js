export function capacityChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.capacity]));
  return after.filter((x) => old.get(x.id) !== x.capacity).map((x) => x.id);
}
