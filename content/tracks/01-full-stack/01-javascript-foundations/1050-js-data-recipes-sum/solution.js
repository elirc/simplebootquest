export function totalMinutes(recipes) {
  return recipes.reduce((sum, x) => sum + x.minutes, 0);
}
