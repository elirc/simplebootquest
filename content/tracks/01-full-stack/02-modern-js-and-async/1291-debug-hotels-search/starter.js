export function searchHotels(hotels, query) {
  const q = query.trim();
  return hotels.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
