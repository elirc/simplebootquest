export function allStudentsUnder(students, limit) {
  return students.every((x) => x.score < limit);
}
