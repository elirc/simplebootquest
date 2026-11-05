export function percentGraduated(students) {
  if (students.length === 0) return 0;
  return Math.round((students.filter((x) => x.graduated).length / students.length) * 100);
}
