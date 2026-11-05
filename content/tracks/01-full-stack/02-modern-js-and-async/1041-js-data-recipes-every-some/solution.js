export function allRecipesUnder(recipes, limit) {
  return recipes.every((x) => x.calories < limit);
}
