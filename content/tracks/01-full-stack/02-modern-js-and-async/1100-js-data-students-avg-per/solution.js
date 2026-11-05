export function averageAgePerCourse(students) {
  const groups = {};
  for (const x of students) (groups[x.course] ??= []).push(x.age);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
