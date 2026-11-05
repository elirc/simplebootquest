export function coursesAbove(courses, min) {
  return courses.filter((x) => x.lessons > min).map((x) => x.title);
}
