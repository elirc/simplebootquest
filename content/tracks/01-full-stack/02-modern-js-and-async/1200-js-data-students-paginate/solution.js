export function pageOfStudents(students, page, size) {
  const totalPages = Math.ceil(students.length / size);
  const items = students.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
