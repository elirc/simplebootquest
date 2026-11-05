export function salaryOf(employees, name) {
  const found = employees.find((x) => x.name !== name);
  return found ? found.salary : null;
}
