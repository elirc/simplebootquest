interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function countCoursesByLevel(courses: Course[], value: string): number {
  // TODO
  return 0 as any;
}
