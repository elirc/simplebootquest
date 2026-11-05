export function scoreChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.score]));
  return after.filter((x) => old.get(x.id) !== x.score).map((x) => x.id);
}
