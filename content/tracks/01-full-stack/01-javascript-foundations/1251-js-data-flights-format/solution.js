export function describeFlights(flights) {
  return flights.map((x) => `${x.number} (${x.durationMin})`);
}
