export function distinctKinds(workouts) {
  return [...new Set(workouts.map((x) => x.kind))].sort();
}
