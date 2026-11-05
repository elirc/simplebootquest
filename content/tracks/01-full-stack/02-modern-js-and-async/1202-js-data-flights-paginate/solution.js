export function pageOfFlights(flights, page, size) {
  const totalPages = Math.ceil(flights.length / size);
  const items = flights.slice((page - 1) * size, page * size).map((x) => x.number);
  return { items, page, totalPages };
}
