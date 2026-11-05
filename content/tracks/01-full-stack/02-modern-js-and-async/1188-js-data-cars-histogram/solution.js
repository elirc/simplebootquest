export function priceKHistogram(cars, width) {
  const buckets = {};
  for (const x of cars) {
    const key = Math.floor(x.priceK / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
