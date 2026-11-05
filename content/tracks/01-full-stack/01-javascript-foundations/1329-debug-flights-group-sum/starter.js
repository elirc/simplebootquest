export function seatsPerAirline(flights) {
  const totals = {};
  for (const x of flights) totals[x.airline] = (totals[x.airline] ?? 1) + x.seats;
  return totals;
}
