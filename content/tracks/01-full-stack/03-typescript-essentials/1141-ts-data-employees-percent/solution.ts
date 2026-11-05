interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function percentRemote(employees: Employee[]): number {
  if (employees.length === 0) return 0;
  return Math.round((employees.filter((x) => x.remote).length / employees.length) * 100);
}
