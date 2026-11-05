export function averageCapacityPerFormat(events) {
  const groups = {};
  for (const x of events) (groups[x.format] ??= []).push(x.capacity);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
