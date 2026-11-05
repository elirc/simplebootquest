export function studentsInCourseRanked(students, value) {
  return students
    .filter((x) => x.course === value)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.name);
}
