export function topEmployeesBySalary(employees, n) {
  return [...employees].sort((a, b) => b.salary - a.salary).slice(0, n).map((x) => x.name);
}
