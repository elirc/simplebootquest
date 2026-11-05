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
  return recipes.filter((x) => x.minutes >= low && x.minutes <= high).map((x) => x.name);
}
