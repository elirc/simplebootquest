export function studentsInRange(students, low, high) {
  return students.filter((x) => x.age >= low && x.age <= high).map((x) => x.name);
}
