export function workoutsAbove(workouts, min) {
  return workouts.filter((x) => x.calories > min).map((x) => x.label);
}
