export function countStudentsByCourse(students, value) {
  let count = 0;
  for (const x of students) if (x.course === value) count++;
  return count;
}
