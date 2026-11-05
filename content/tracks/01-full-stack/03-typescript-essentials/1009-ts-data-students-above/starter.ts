interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function studentsAbove(students: Student[], min: number): string[] {
  // TODO
  return [] as any;
}
