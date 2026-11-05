export function minutesHistogram(recipes, width) {
  const buckets = {};
  for (const x of recipes) {
    const key = Math.floor(x.minutes / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
