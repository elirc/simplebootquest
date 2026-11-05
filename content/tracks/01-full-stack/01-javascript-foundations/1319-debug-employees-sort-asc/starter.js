export function employeesBySalary(employees) {
  return [...employees].sort((a, b) => b.salary - a.salary).map((x) => x.name);
}
