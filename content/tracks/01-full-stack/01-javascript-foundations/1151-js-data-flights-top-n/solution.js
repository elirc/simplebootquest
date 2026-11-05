export function topFlightsBySeats(flights, n) {
  return [...flights].sort((a, b) => b.seats - a.seats).slice(0, n).map((x) => x.number);
}
