export function salaryPerLevel(employees) {
  const totals = {};
  for (const x of employees) totals[x.level] = (totals[x.level] ?? 0) + x.salary;
  return totals;
}
