export function minutesPerCuisine(recipes) {
  const totals = {};
  for (const x of recipes) totals[x.cuisine] = (totals[x.cuisine] ?? 0) + x.minutes;
  return totals;
}
