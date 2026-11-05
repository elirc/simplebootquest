export function allCoursesUnder(courses, limit) {
  return courses.every((x) => x.lessons < limit);
}
