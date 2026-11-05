interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function lowestLessons(courses: Course[]): string | null {
  // TODO
  return 0 as any;
}
