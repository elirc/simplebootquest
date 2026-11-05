export function countEmployeesByLevel(employees, value) {
  let count = 0;
  for (const x of employees) if (x.level === value) count++;
  return count;
}
