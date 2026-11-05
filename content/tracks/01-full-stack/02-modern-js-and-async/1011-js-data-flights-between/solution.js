export function flightsInRange(flights, low, high) {
  return flights.filter((x) => x.durationMin >= low && x.durationMin <= high).map((x) => x.number);
}
