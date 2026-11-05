interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function totalMinutes(recipes: Recipe[]): number {
  return recipes.reduce((sum, x) => sum + x.minutes, 0);
}
