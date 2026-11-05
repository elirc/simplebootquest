export function heightCmHistogram(plants, width) {
  const buckets = {};
  for (const x of plants) {
    const key = Math.floor(x.heightCm / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
