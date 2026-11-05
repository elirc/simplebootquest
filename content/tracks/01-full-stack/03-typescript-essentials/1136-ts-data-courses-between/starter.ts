interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function coursesInRange(courses: Course[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
