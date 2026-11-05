interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function countStudentsByCourse(students: Student[], value: string): number {
  // TODO
  return 0 as any;
}
