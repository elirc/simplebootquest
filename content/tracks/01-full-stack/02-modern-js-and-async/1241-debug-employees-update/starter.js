export function bumpSalary(employees, value, amount) {
  return employees.map((x) => (x.team !== value ? { ...x, salary: x.salary + amount } : x));
}
