interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function coursesInRange(courses: Course[], low: number, high: number): string[] {
  return courses.filter((x) => x.lessons >= low && x.lessons <= high).map((x) => x.title);
}
