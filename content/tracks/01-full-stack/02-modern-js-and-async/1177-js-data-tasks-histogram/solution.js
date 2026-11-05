export function priorityHistogram(tasks, width) {
  const buckets = {};
  for (const x of tasks) {
    const key = Math.floor(x.priority / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
