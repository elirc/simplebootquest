export function distinctContinents(cities) {
  return [...new Set(cities.map((x) => x.continent))].sort();
}
