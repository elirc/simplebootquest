export function splitRecipesByVegetarian(recipes) {
  const yes = [];
  const no = [];
  for (const x of recipes) (x.vegetarian ? yes : no).push(x.name);
  return { yes, no };
}
