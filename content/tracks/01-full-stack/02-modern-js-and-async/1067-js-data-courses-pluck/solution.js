export function summariseCourses(courses) {
  return courses.map(({ id, title, lessons }) => ({ id, title, lessons }));
}
