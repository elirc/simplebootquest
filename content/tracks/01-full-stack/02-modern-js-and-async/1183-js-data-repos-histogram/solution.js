export function starsHistogram(repos, width) {
  const buckets = {};
  for (const x of repos) {
    const key = Math.floor(x.stars / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
