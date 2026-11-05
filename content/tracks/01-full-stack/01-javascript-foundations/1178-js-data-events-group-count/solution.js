export function countEventsPerFormat(events) {
  const counts = {};
  for (const x of events) counts[x.format] = (counts[x.format] ?? 0) + 1;
  return counts;
}
