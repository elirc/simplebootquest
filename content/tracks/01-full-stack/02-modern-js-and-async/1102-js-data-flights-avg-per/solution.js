export function averageDurationMinPerAirline(flights) {
  const groups = {};
  for (const x of flights) (groups[x.airline] ??= []).push(x.durationMin);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
