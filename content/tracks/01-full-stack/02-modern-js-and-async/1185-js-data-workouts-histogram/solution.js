export function caloriesHistogram(workouts, width) {
  const buckets = {};
  for (const x of workouts) {
    const key = Math.floor(x.calories / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
