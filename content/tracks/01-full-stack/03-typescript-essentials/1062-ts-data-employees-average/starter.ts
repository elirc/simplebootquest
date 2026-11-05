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
  // TODO
  return 0 as any;
}
