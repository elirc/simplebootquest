interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function recipesInRange(recipes: Recipe[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
