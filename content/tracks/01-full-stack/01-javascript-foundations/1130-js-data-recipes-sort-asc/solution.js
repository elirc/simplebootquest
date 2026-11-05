export function recipesByCalories(recipes) {
  return [...recipes].sort((a, b) => a.calories - b.calories).map((x) => x.name);
}
