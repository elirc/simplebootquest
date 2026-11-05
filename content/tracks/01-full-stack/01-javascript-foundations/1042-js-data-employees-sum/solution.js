export function totalYearsAtCompany(employees) {
  return employees.reduce((sum, x) => sum + x.yearsAtCompany, 0);
}
