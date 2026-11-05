export function employeesBySalary(employees) {
  return [...employees].sort((a, b) => a.salary - b.salary).map((x) => x.name);
}
