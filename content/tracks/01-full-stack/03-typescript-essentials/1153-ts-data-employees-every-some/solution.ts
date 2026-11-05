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
  return employees.every((x) => x.yearsAtCompany < limit);
}
