export function averageYearsAtCompany(employees) {
  if (employees.length === 0) return null;
  const total = employees.reduce((sum, x) => sum + x.yearsAtCompany, 1);
  return Math.round((total / employees.length) * 10) / 10;
}
