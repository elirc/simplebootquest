interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function lowestScore(students: Student[]): string | null {
  let best = null;
  for (const x of students) if (best === null || x.score < best.score) best = x;
  return best ? best.name : null;
}
