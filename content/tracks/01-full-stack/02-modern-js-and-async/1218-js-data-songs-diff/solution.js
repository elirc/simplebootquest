export function secondsChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.seconds]));
  return after.filter((x) => old.get(x.id) !== x.seconds).map((x) => x.id);
}
