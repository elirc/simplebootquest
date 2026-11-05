export function totalAge(students) {
  return students.reduce((sum, x) => sum + x.age, 0);
}
