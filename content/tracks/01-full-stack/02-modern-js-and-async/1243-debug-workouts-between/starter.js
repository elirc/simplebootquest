export function workoutsInRange(workouts, low, high) {
  return workouts.filter((x) => x.calories > low && x.calories <= high).map((x) => x.label);
}
