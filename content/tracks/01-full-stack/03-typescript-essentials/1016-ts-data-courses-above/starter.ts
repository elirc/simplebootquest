interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function coursesAbove(courses: Course[], min: number): string[] {
  // TODO
  return [] as any;
}
