interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function averageEnrolled(courses: Course[]): number | null {
  if (courses.length === 0) return null;
  const total = courses.reduce((sum, x) => sum + x.enrolled, 0);
  return Math.round((total / courses.length) * 10) / 10;
}
