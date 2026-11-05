export function totalEnrolled(courses) {
  return courses.reduce((sum, x) => sum + x.enrolled, 0);
}
