interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function averageCalories(recipes: Recipe[]): number | null {
  if (recipes.length === 0) return null;
  const total = recipes.reduce((sum, x) => sum + x.calories, 0);
  return Math.round((total / recipes.length) * 10) / 10;
}
