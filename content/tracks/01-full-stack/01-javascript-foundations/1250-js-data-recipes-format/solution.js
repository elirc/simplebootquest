export function describeRecipes(recipes) {
  return recipes.map((x) => `${x.name} (${x.calories})`);
}
