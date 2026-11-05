export function citiesInContinentRanked(cities, value) {
  return cities
    .filter((x) => x.continent === value)
    .sort((a, b) => a.avgTemp - b.avgTemp)
    .map((x) => x.name);
}
