export function seatsPerAirline(flights) {
  const totals = {};
  for (const x of flights) totals[x.airline] = (totals[x.airline] ?? 0) + x.seats;
  return totals;
}
