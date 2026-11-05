export function allFlightsUnder(flights, limit) {
  return flights.every((x) => x.durationMin < limit);
}
