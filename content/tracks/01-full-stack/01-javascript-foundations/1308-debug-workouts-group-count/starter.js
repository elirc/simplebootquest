export function countWorkoutsPerKind(workouts) {
  const counts = {};
  for (const x of workouts) counts[x.kind] = (counts[x.kind] ?? 1) + 1;
  return counts;
}
