export function averageSeats(flights) {
  if (flights.length === 0) return null;
  const total = flights.reduce((sum, x) => sum + x.seats, 0);
  return Math.round((total / flights.length) * 10) / 10;
}
