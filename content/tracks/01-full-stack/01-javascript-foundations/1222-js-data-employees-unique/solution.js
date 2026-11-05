export function distinctLevels(employees) {
  return [...new Set(employees.map((x) => x.level))].sort();
}
