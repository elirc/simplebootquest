export function lowestSalary(employees) {
  let best = null;
  for (const x of employees) if (best === null || x.salary < best.salary) best = x;
  return best ? best.name : null;
}
