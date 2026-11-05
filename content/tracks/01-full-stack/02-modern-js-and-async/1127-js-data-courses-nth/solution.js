export function nthByLessons(courses, n) {
  const sorted = [...courses].sort((a, b) => b.lessons - a.lessons);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
