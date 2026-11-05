export function totalCalories(workouts) {
  return workouts.reduce((sum, x) => sum + x.calories, 0);
}
