export function distinctAirlines(flights) {
  return [...new Set(flights.map((x) => x.airline))].sort();
}
