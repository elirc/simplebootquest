export function countStudentsPerCourse(students) {
  const counts = {};
  for (const x of students) counts[x.course] = (counts[x.course] ?? 0) + 1;
  return counts;
}
