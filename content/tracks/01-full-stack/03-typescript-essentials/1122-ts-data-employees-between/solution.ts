interface Employee {
  id: number;
  name: string;
  salary: number;
  yearsAtCompany: number;
  team: "platform" | "product" | "data";
  level: "junior" | "mid" | "senior";
  remote: boolean;
}

export function employeesInRange(employees: Employee[], low: number, high: number): string[] {
  return employees.filter((x) => x.salary >= low && x.salary <= high).map((x) => x.name);
}
