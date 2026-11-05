export function averageEnrolled(courses) {
  if (courses.length === 0) return null;
  const total = courses.reduce((sum, x) => sum + x.enrolled, 0);
  return Math.round((total / courses.length) * 10) / 10;
}
