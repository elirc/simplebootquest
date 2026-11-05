interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function allStudentsUnder(students: Student[], limit: number): boolean {
  return students.every((x) => x.score < limit);
}
