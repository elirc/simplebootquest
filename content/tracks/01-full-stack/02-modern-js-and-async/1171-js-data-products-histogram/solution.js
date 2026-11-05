export function priceHistogram(products, width) {
  const buckets = {};
  for (const x of products) {
    const key = Math.floor(x.price / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
