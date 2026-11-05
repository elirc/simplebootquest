export function distinctLevels(courses) {
  return [...new Set(courses.map((x) => x.level))].sort();
}
