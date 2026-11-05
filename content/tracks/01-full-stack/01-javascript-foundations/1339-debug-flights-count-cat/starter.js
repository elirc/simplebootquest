export function countFlightsByAirline(flights, value) {
  let count = 0;
  for (const x of flights) if (x.airline !== value) count++;
  return count;
}
