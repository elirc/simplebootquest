export function waterEveryDaysHistogram(plants, width) {
  const buckets = {};
  for (const x of plants) {
    const key = Math.floor(x.waterEveryDays / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
