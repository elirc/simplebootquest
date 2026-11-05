export function lessonsChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.lessons]));
  return after.filter((x) => old.get(x.id) !== x.lessons).map((x) => x.id);
}
