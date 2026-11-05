export function distinctCourses(students) {
  return [...new Set(students.map((x) => x.course))].sort();
}
