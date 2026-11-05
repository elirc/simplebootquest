export function totalCentsChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.totalCents]));
  return after.filter((x) => old.get(x.id) !== x.totalCents).map((x) => x.id);
}
