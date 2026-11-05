export function allEmployeesUnder(employees, limit) {
  return employees.every((x) => x.salary < limit);
}
