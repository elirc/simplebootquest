export function workoutsByCalories(workouts) {
  return [...workouts].sort((a, b) => b.calories - a.calories).map((x) => x.label);
}
