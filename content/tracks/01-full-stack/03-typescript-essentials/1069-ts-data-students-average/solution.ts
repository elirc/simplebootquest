interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function averageScore(students: Student[]): number | null {
  if (students.length === 0) return null;
  const total = students.reduce((sum, x) => sum + x.score, 0);
  return Math.round((total / students.length) * 10) / 10;
}
