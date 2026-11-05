export function searchCities(cities, query) {
  const q = query.trim();
  return cities.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
