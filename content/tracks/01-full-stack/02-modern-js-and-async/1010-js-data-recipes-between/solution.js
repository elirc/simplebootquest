export function recipesInRange(recipes, low, high) {
  return recipes.filter((x) => x.calories >= low && x.calories <= high).map((x) => x.name);
}
