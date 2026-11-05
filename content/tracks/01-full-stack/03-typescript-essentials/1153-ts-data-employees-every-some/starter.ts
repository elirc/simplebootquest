interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function allEmployeesUnder(employees: Employee[], limit: number): boolean {
  // TODO
  return 0 as any;
}
