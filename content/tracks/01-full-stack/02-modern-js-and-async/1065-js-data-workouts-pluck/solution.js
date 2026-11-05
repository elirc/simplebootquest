export function summariseWorkouts(workouts) {
  return workouts.map(({ id, label, calories }) => ({ id, label, calories }));
}
