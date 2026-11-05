export function summariseEmployees(employees) {
  return employees.map(({ id, name, salary }) => ({ id, name, salary }));
}
