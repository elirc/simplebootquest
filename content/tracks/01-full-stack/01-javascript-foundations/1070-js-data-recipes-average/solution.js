export function averageCalories(recipes) {
  if (recipes.length === 0) return null;
  const total = recipes.reduce((sum, x) => sum + x.calories, 0);
  return Math.round((total / recipes.length) * 10) / 10;
}
