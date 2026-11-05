export function percentRemote(employees) {
  if (employees.length === 0) return 0;
  return Math.round((employees.filter((x) => x.remote).length / employees.length) * 100);
}
