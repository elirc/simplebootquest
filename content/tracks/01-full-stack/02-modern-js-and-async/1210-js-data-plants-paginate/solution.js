export function pageOfPlants(plants, page, size) {
  const totalPages = Math.ceil(plants.length / size);
  const items = plants.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
