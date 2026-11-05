export function summariseRecipes(recipes) {
  return recipes.map(({ id, name, minutes }) => ({ id, name, minutes }));
}
