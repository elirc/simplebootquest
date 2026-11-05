export function nthBySalary(employees, n) {
  const sorted = [...employees].sort((a, b) => b.salary - a.salary);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
