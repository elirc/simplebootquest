export function highestCalories(workouts) {
  let best = null;
  for (const x of workouts) if (best === null || x.calories > best.calories) best = x;
  return best ? best.label : null;
}
