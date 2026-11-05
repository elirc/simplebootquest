export function topStudentsByAge(students, n) {
  return [...students].sort((a, b) => b.age - a.age).slice(0, n).map((x) => x.name);
}
