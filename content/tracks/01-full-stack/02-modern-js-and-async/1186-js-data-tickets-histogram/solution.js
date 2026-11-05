export function ageHoursHistogram(tickets, width) {
  const buckets = {};
  for (const x of tickets) {
    const key = Math.floor(x.ageHours / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
