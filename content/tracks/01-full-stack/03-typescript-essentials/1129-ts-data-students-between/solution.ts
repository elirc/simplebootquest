interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function studentsInRange(students: Student[], low: number, high: number): string[] {
  return students.filter((x) => x.age >= low && x.age <= high).map((x) => x.name);
}
