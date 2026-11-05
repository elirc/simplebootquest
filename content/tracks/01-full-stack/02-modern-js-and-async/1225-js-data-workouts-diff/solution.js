export function minutesChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.minutes]));
  return after.filter((x) => old.get(x.id) !== x.minutes).map((x) => x.id);
}
