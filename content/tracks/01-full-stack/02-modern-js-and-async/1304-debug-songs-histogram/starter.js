export function secondsHistogram(songs, width) {
  const buckets = {};
  for (const x of songs) {
    const key = Math.floor(x.seconds / width) * width;
    buckets[key] = (buckets[key] ?? 1) + 1;
  }
  return buckets;
}
