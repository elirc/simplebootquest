interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function highestLessons(courses: Course[]): string | null {
  let best = null;
  for (const x of courses) if (best === null || x.lessons > best.lessons) best = x;
  return best ? best.title : null;
}
