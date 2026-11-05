export function estimateChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.estimate]));
  return after.filter((x) => old.get(x.id) !== x.estimate).map((x) => x.id);
}
