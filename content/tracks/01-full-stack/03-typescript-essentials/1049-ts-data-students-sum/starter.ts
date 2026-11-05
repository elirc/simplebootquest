interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function totalAge(students: Student[]): number {
  // TODO
  return 0 as any;
}
