export function studentsInRange(students, low, high) {
  return students.filter((x) => x.score > low && x.score <= high).map((x) => x.name);
}
