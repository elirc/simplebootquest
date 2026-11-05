export function lessonsHistogram(courses, width) {
  const buckets = {};
  for (const x of courses) {
    const key = Math.floor(x.lessons / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
