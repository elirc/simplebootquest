export function employeesById(employees) {
  const byId = {};
  for (const x of employees) byId[x.id] = x.name;
  return byId;
}
