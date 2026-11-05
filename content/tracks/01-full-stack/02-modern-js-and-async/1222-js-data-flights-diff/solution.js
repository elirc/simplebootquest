export function durationMinChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.durationMin]));
  return after.filter((x) => old.get(x.id) !== x.durationMin).map((x) => x.id);
}
