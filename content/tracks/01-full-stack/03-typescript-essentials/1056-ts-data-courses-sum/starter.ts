interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function totalEnrolled(courses: Course[]): number {
  // TODO
  return 0 as any;
}
