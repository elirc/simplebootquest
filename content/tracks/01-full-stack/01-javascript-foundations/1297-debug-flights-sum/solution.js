export function totalSeats(flights) {
  return flights.reduce((sum, x) => sum + x.seats, 0);
}
