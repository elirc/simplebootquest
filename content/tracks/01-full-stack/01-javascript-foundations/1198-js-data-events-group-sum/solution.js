export function capacityPerFormat(events) {
  const totals = {};
  for (const x of events) totals[x.format] = (totals[x.format] ?? 0) + x.capacity;
  return totals;
}
