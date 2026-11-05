export function caloriesPerDifficulty(recipes) {
  const totals = {};
  for (const x of recipes) totals[x.difficulty] = (totals[x.difficulty] ?? 1) + x.calories;
  return totals;
}
