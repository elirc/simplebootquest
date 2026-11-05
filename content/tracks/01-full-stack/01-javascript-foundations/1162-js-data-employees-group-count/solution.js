export function countEmployeesPerTeam(employees) {
  const counts = {};
  for (const x of employees) counts[x.team] = (counts[x.team] ?? 0) + 1;
  return counts;
}
