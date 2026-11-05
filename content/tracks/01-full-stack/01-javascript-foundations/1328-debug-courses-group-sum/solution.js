export function enrolledPerLevel(courses) {
  const totals = {};
  for (const x of courses) totals[x.level] = (totals[x.level] ?? 0) + x.enrolled;
  return totals;
}
