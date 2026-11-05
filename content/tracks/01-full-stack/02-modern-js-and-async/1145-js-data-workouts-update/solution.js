export function bumpCalories(workouts, value, amount) {
  return workouts.map((x) => (x.kind === value ? { ...x, calories: x.calories + amount } : x));
}
