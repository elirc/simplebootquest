export function topCoursesByEnrolled(courses, n) {
  return [...courses].sort((a, b) => b.enrolled - a.enrolled).slice(0, n).map((x) => x.title);
}
