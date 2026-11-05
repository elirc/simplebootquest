interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function summariseEmployees(employees: Employee[]): { id: number; name: string; salary: number }[] {
  return employees.map(({ id, name, salary }) => ({ id, name, salary }));
}
