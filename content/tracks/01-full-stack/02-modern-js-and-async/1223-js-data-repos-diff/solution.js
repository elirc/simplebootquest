export function starsChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.stars]));
  return after.filter((x) => old.get(x.id) !== x.stars).map((x) => x.id);
}
