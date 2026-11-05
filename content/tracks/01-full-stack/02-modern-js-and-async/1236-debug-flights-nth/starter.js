export function nthBySeats(flights, n) {
  const sorted = [...flights].sort((a, b) => b.seats - a.seats);
  return n > 1 && n <= sorted.length ? sorted[n - 1].number : null;
}
