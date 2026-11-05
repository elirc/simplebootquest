export function distinctCuisines(recipes) {
  return [...new Set(recipes.map((x) => x.cuisine))].sort();
}
