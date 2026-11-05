export function topRecipesByCalories(recipes, n) {
  return [...recipes].sort((a, b) => b.calories - a.calories).slice(0, n).map((x) => x.name);
}
