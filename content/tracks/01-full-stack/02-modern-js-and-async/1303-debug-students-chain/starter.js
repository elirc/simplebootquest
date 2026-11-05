export function studentsInCourseRanked(students, value) {
  return students
    .filter((x) => x.course === value)
    .sort((a, b) => a.score - b.score)
    .map((x) => x.name);
}
