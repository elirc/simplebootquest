interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function allStudentsUnder(students: Student[], limit: number): boolean {
  // TODO
  return 0 as any;
}
