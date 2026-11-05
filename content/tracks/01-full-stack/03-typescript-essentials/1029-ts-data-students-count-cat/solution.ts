interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function countStudentsByCourse(students: Student[], value: string): number {
  let count = 0;
  for (const x of students) if (x.course === value) count++;
  return count;
}
