export function yearHistogram(movies, width) {
  const buckets = {};
  for (const x of movies) {
    const key = Math.floor(x.year / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
