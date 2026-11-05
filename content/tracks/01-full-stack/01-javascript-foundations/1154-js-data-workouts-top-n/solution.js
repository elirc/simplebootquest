export function topWorkoutsByCalories(workouts, n) {
  return [...workouts].sort((a, b) => b.calories - a.calories).slice(0, n).map((x) => x.label);
}
