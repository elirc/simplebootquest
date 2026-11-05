interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function lowestCalories(recipes: Recipe[]): string | null {
  let best = null;
  for (const x of recipes) if (best === null || x.calories < best.calories) best = x;
  return best ? best.name : null;
}
