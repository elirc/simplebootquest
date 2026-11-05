interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function averageScore(students: Student[]): number | null {
  // TODO
  return 0 as any;
}
