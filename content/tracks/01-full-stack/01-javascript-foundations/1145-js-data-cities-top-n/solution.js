export function topCitiesByPopulation(cities, n) {
  return [...cities].sort((a, b) => b.population - a.population).slice(0, n).map((x) => x.name);
}
