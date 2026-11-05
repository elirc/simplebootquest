export function searchCities(cities, query) {
  const q = query.trim().toLowerCase();
  return cities.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
