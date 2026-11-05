export function studentsAbove(students, min) {
  return students.filter((x) => x.score >= min).map((x) => x.name);
}
