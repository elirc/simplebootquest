interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function summariseCourses(courses: Course[]): { id: number; title: string; enrolled: number }[] {
  return courses.map(({ id, title, enrolled }) => ({ id, title, enrolled }));
}
