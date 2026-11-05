interface Course {
  id: number;
  title: string;
  lessons: number;
  enrolled: number;
  level: "beginner" | "intermediate" | "advanced";
}

export function countCoursesByLevel(courses: Course[], value: string): number {
  let count = 0;
  for (const x of courses) if (x.level === value) count++;
  return count;
}
