export function searchFlights(flights, query) {
  const q = query.trim().toLowerCase();
  return flights.filter((x) => x.number.toLowerCase().includes(q)).map((x) => x.number);
}
