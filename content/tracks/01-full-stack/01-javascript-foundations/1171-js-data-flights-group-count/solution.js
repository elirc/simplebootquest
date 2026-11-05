export function countFlightsPerAirline(flights) {
  const counts = {};
  for (const x of flights) counts[x.airline] = (counts[x.airline] ?? 0) + 1;
  return counts;
}
