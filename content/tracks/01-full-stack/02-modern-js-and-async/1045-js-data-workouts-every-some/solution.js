export function allWorkoutsUnder(workouts, limit) {
  return workouts.every((x) => x.calories < limit);
}
