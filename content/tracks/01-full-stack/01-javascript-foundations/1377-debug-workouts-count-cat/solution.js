export function countWorkoutsByKind(workouts, value) {
  let count = 0;
  for (const x of workouts) if (x.kind === value) count++;
  return count;
}
