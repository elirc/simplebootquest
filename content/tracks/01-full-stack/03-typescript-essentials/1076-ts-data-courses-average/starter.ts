interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function averageEnrolled(courses: Course[]): number | null {
  // TODO
  return 0 as any;
}
