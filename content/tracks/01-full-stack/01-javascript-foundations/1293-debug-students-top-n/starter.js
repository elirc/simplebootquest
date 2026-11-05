export function topStudentsByAge(students, n) {
  return [...students].sort((a, b) => a.age - b.age).slice(0, n).map((x) => x.name);
}
