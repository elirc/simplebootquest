interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function totalEnrolled(courses: Course[]): number {
  return courses.reduce((sum, x) => sum + x.enrolled, 0);
}
