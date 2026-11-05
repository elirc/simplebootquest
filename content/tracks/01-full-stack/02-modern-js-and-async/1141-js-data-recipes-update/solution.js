export function bumpCalories(recipes, value, amount) {
  return recipes.map((x) => (x.cuisine === value ? { ...x, calories: x.calories + amount } : x));
}
