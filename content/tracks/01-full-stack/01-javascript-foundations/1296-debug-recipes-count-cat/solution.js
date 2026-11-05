export function countRecipesByCuisine(recipes, value) {
  let count = 0;
  for (const x of recipes) if (x.cuisine === value) count++;
  return count;
}
