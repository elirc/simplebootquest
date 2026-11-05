interface Student {
  id: number;
  name: string;
  score: number;
  age: number;
  course: "web" | "data" | "design";
  graduated: boolean;
}

export function summariseStudents(students: Student[]): { id: number; name: string; age: number }[] {
  return students.map(({ id, name, age }) => ({ id, name, age }));
}
