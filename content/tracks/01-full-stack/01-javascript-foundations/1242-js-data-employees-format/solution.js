export function describeEmployees(employees) {
  return employees.map((x) => `${x.name} (${x.salary})`);
}
