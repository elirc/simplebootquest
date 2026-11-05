export function topCoursesByLessons(courses, n) {
  return [...courses].sort((a, b) => a.lessons - b.lessons).slice(0, n).map((x) => x.title);
}
