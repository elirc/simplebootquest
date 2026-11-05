export function nthByCalories(workouts, n) {
  const sorted = [...workouts].sort((a, b) => b.calories - a.calories);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].label : null;
}
