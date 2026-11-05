export function registeredHistogram(events, width) {
  const buckets = {};
  for (const x of events) {
    const key = Math.floor(x.registered / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
