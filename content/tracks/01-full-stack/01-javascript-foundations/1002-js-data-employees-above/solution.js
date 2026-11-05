export function employeesAbove(employees, min) {
  return employees.filter((x) => x.salary > min).map((x) => x.name);
}
