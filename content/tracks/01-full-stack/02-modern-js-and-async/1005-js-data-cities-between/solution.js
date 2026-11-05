export function citiesInRange(cities, low, high) {
  return cities.filter((x) => x.population >= low && x.population <= high).map((x) => x.name);
}
