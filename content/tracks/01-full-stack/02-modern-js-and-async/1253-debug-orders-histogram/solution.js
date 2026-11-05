export function itemsHistogram(orders, width) {
  const buckets = {};
  for (const x of orders) {
    const key = Math.floor(x.items / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
