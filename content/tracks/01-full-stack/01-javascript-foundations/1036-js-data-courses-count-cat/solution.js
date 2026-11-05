export function countCoursesByLevel(courses, value) {
  let count = 0;
  for (const x of courses) if (x.level === value) count++;
  return count;
}
