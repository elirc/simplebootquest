export function allCitiesUnder(cities, limit) {
  return cities.every((x) => x.population < limit);
}
