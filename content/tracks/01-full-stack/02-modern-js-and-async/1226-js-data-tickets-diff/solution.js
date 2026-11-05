export function ageHoursChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.ageHours]));
  return after.filter((x) => old.get(x.id) !== x.ageHours).map((x) => x.id);
}
