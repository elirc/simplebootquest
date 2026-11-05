interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function percentVegetarian(recipes: Recipe[]): number {
  if (recipes.length === 0) return 0;
  return Math.round((recipes.filter((x) => x.vegetarian).length / recipes.length) * 100);
}
