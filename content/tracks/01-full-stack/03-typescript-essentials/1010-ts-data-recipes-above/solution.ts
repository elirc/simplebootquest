interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function recipesAbove(recipes: Recipe[], min: number): string[] {
  return recipes.filter((x) => x.calories > min).map((x) => x.name);
}
