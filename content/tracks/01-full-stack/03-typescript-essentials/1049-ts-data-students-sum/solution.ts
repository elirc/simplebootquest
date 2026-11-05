interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function totalAge(students: Student[]): number {
  return students.reduce((sum, x) => sum + x.age, 0);
}
