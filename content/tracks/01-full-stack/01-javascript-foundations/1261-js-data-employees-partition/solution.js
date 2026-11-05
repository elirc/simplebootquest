export function splitEmployeesByRemote(employees) {
  const yes = [];
  const no = [];
  for (const x of employees) (x.remote ? yes : no).push(x.name);
  return { yes, no };
}
