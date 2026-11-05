export function citiesInContinentRanked(cities, value) {
  return cities
    .filter((x) => x.continent === value)
    .sort((a, b) => b.avgTemp - a.avgTemp)
    .map((x) => x.name);
}
