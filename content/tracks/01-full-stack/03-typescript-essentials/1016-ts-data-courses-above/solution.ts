interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function coursesAbove(courses: Course[], min: number): string[] {
  return courses.filter((x) => x.enrolled > min).map((x) => x.title);
}
