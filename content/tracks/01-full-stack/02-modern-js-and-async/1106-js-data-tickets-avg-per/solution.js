export function averageAgeHoursPerChannel(tickets) {
  const groups = {};
  for (const x of tickets) (groups[x.channel] ??= []).push(x.ageHours);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
