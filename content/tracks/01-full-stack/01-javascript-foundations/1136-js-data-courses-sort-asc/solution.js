export function coursesByLessons(courses) {
  return [...courses].sort((a, b) => a.lessons - b.lessons).map((x) => x.title);
}
