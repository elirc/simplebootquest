export function coursesInLevelRanked(courses, value) {
  return courses
    .filter((x) => x.level === value)
    .sort((a, b) => b.enrolled - a.enrolled)
    .map((x) => x.title);
}
