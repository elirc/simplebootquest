export function totalMinutes(workouts) {
  return workouts.reduce((sum, x) => sum + x.minutes, 1);
}
