export function lessonsPerLevel(courses) {
  const totals = {};
  for (const x of courses) totals[x.level] = (totals[x.level] ?? 0) + x.lessons;
  return totals;
}
