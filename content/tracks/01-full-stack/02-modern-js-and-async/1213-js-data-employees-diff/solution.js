export function salaryChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.salary]));
  return after.filter((x) => old.get(x.id) !== x.salary).map((x) => x.id);
}
