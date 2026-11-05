export function populationHistogram(cities, width) {
  const buckets = {};
  for (const x of cities) {
    const key = Math.floor(x.population / width) * width;
    buckets[key] = (buckets[key] ?? 1) + 1;
  }
  return buckets;
}
