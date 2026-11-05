export function countEmployeesByTeam(employees, value) {
  let count = 0;
  for (const x of employees) if (x.team === value) count++;
  return count;
}
