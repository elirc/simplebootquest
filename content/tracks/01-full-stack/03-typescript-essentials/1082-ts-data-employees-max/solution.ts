interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function highestSalary(employees: Employee[]): string | null {
  let best = null;
  for (const x of employees) if (best === null || x.salary > best.salary) best = x;
  return best ? best.name : null;
}
