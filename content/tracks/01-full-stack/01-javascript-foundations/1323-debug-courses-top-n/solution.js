export function topCoursesByLessons(courses, n) {
  return [...courses].sort((a, b) => b.lessons - a.lessons).slice(0, n).map((x) => x.title);
}
