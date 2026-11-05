export function pageOfHotels(hotels, page, size) {
  const totalPages = Math.ceil(hotels.length / size);
  const items = hotels.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
