export function coursesInRange(courses, low, high) {
  return courses.filter((x) => x.enrolled > low && x.enrolled <= high).map((x) => x.title);
}
