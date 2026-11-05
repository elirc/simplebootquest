export function employeesInRange(employees, low, high) {
  return employees.filter((x) => x.yearsAtCompany >= low && x.yearsAtCompany <= high).map((x) => x.name);
}
