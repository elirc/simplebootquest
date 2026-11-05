export function populationChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.population]));
  return after.filter((x) => old.get(x.id) !== x.population).map((x) => x.id);
}
