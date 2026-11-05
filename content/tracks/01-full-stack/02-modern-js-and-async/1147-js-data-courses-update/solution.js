export function bumpLessons(courses, value, amount) {
  return courses.map((x) => (x.level === value ? { ...x, lessons: x.lessons + amount } : x));
}
