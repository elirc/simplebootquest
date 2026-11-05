interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function summariseRecipes(recipes: Recipe[]): { id: number; name: string; minutes: number }[] {
  return recipes.map(({ id, name, minutes }) => ({ id, name, minutes }));
}
