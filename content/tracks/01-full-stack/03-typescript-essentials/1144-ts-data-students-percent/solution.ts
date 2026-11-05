interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function percentGraduated(students: Student[]): number {
  if (students.length === 0) return 0;
  return Math.round((students.filter((x) => x.graduated).length / students.length) * 100);
}
