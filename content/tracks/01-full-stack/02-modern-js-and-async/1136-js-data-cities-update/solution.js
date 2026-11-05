export function bumpPopulation(cities, value, amount) {
  return cities.map((x) => (x.continent === value ? { ...x, population: x.population + amount } : x));
}
