interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function allRecipesUnder(recipes: Recipe[], limit: number): boolean {
  // TODO
  return 0 as any;
}
