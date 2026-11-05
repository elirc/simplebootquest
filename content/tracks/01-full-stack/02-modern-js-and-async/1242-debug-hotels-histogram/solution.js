export function nightlyPriceHistogram(hotels, width) {
  const buckets = {};
  for (const x of hotels) {
    const key = Math.floor(x.nightlyPrice / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
