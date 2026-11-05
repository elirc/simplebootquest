export function describeWorkouts(workouts) {
  return workouts.map((x) => `${x.label} (${x.minutes})`);
}
