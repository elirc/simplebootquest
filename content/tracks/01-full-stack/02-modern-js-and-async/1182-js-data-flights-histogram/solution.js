export function delayMinHistogram(flights, width) {
  const buckets = {};
  for (const x of flights) {
    const key = Math.floor(x.delayMin / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
