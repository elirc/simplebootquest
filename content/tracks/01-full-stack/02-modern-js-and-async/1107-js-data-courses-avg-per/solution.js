export function averageEnrolledPerLevel(courses) {
  const groups = {};
  for (const x of courses) (groups[x.level] ??= []).push(x.enrolled);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
