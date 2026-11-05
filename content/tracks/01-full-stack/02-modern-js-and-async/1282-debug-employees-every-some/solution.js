export function allEmployeesUnder(employees, limit) {
  return employees.every((x) => x.yearsAtCompany < limit);
}
