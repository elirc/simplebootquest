interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function allCoursesUnder(courses: Course[], limit: number): boolean {
  // TODO
  return 0 as any;
}
