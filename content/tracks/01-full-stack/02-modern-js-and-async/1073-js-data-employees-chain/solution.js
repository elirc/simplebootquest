export function employeesInTeamRanked(employees, value) {
  return employees
    .filter((x) => x.team === value)
    .sort((a, b) => b.yearsAtCompany - a.yearsAtCompany)
    .map((x) => x.name);
}
