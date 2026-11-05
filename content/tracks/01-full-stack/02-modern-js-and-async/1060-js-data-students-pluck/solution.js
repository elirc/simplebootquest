export function summariseStudents(students) {
  return students.map(({ id, name, age }) => ({ id, name, age }));
}
