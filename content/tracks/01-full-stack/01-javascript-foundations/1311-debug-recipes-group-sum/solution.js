export function caloriesPerDifficulty(recipes) {
  const totals = {};
  for (const x of recipes) totals[x.difficulty] = (totals[x.difficulty] ?? 0) + x.calories;
  return totals;
}
