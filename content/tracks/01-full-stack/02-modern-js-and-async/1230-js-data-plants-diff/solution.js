export function waterEveryDaysChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.waterEveryDays]));
  return after.filter((x) => old.get(x.id) !== x.waterEveryDays).map((x) => x.id);
}
