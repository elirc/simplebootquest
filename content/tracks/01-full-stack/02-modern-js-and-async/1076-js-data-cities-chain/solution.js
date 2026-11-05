export function citiesInContinentRanked(cities, value) {
  return cities
    .filter((x) => x.continent === value)
    .sort((a, b) => b.population - a.population)
    .map((x) => x.name);
}
