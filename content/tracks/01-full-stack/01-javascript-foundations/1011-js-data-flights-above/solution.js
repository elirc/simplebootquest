export function flightsAbove(flights, min) {
  return flights.filter((x) => x.durationMin > min).map((x) => x.number);
}
