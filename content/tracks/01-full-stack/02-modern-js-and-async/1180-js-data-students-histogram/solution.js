export function ageHistogram(students, width) {
  const buckets = {};
  for (const x of students) {
    const key = Math.floor(x.age / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
