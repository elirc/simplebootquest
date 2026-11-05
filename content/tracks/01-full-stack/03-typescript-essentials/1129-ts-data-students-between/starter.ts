interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function studentsInRange(students: Student[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
