export function workoutsByCalories(workouts) {
  return [...workouts].sort((a, b) => a.calories - b.calories).map((x) => x.label);
}
