export function coursesInRange(courses, low, high) {
  return courses.filter((x) => x.lessons >= low && x.lessons <= high).map((x) => x.title);
}
