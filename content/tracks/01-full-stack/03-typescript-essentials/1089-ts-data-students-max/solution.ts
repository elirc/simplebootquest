interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function highestAge(students: Student[]): string | null {
  let best = null;
  for (const x of students) if (best === null || x.age > best.age) best = x;
  return best ? best.name : null;
}
