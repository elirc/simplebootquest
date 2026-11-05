interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function countRecipesByCuisine(recipes: Recipe[], value: string): number {
  // TODO
  return 0 as any;
}
