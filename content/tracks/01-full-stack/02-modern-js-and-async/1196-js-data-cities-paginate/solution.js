export function pageOfCities(cities, page, size) {
  const totalPages = Math.ceil(cities.length / size);
  const items = cities.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
