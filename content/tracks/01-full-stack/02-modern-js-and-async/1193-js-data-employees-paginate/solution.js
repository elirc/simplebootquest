export function pageOfEmployees(employees, page, size) {
  const totalPages = Math.ceil(employees.length / size);
  const items = employees.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
