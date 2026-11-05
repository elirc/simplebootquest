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
  let count = 0;
  for (const x of recipes) if (x.cuisine === value) count++;
  return count;
}
