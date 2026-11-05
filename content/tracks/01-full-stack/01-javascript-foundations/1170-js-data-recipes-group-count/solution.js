export function countRecipesPerCuisine(recipes) {
  const counts = {};
  for (const x of recipes) counts[x.cuisine] = (counts[x.cuisine] ?? 0) + 1;
  return counts;
}
