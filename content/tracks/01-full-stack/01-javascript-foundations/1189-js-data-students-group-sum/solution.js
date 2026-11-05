export function scorePerCourse(students) {
  const totals = {};
  for (const x of students) totals[x.course] = (totals[x.course] ?? 0) + x.score;
  return totals;
}
