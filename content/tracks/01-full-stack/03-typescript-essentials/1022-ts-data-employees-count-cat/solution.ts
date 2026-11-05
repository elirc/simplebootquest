interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function countEmployeesByTeam(employees: Employee[], value: string): number {
  let count = 0;
  for (const x of employees) if (x.team === value) count++;
  return count;
}
