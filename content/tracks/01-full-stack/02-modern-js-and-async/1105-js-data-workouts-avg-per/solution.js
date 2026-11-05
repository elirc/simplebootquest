export function averageCaloriesPerKind(workouts) {
  const groups = {};
  for (const x of workouts) (groups[x.kind] ??= []).push(x.calories);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
