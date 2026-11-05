export function citiesAbove(cities, min) {
  return cities.filter((x) => x.population > min).map((x) => x.name);
}
