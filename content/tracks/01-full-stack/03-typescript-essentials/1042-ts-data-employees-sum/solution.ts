interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function totalSalary(employees: Employee[]): number {
  return employees.reduce((sum, x) => sum + x.salary, 0);
}
