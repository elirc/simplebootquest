export function searchEmployees(employees, query) {
  const q = query.trim();
  return employees.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
