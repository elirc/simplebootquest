export function totalSalary(employees) {
  return employees.reduce((sum, x) => sum + x.salary, 0);
}
