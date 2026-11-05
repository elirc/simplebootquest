interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function allCoursesUnder(courses: Course[], limit: number): boolean {
  return courses.every((x) => x.lessons < limit);
}
