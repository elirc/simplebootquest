export function highestCalories(recipes) {
  let best = null;
  for (const x of recipes) if (best === null || x.calories > best.calories) best = x;
  return best ? best.name : null;
}
