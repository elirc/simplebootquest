interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function studentsAbove(students: Student[], min: number): string[] {
  return students.filter((x) => x.age > min).map((x) => x.name);
}
