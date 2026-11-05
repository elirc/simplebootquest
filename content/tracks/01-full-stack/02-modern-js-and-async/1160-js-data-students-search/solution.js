export function searchStudents(students, query) {
  const q = query.trim().toLowerCase();
  return students.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
