export function countCoursesPerLevel(courses) {
  const counts = {};
  for (const x of courses) counts[x.level] = (counts[x.level] ?? 0) + 1;
  return counts;
}
