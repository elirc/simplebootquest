export function averageCalories(workouts) {
  if (workouts.length === 0) return null;
  const total = workouts.reduce((sum, x) => sum + x.calories, 0);
  return Math.round((total / workouts.length) * 10) / 10;
}
