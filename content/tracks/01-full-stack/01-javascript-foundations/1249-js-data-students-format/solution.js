export function describeStudents(students) {
  return students.map((x) => `${x.name} (${x.age})`);
}
