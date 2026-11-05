export function percentVegetarian(recipes) {
  if (recipes.length === 0) return 0;
  return Math.round((recipes.filter((x) => x.vegetarian).length / recipes.length) * 100);
}
