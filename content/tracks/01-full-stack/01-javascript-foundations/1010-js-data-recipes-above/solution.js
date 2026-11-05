export function recipesAbove(recipes, min) {
  return recipes.filter((x) => x.minutes > min).map((x) => x.name);
}
