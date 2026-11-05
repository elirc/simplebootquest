interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function averageYearsAtCompany(employees: Employee[]): number | null {
  if (employees.length === 0) return null;
  const total = employees.reduce((sum, x) => sum + x.yearsAtCompany, 0);
  return Math.round((total / employees.length) * 10) / 10;
}
