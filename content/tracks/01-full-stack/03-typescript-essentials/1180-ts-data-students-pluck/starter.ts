interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function summariseStudents(students: Student[]): { id: number; name: string; age: number }[] {
  // TODO
  return {} as any;
}
