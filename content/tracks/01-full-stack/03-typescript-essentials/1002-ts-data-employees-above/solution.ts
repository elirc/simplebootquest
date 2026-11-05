interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function employeesAbove(employees: Employee[], min: number): string[] {
  return employees.filter((x) => x.salary > min).map((x) => x.name);
}
