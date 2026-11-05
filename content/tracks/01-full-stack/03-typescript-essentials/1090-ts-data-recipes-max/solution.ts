interface Recipe {
  id: number;
  name: string;
  minutes: number;
  calories: number;
  cuisine: "italian" | "asian" | "mexican" | "middle-eastern";
  difficulty: "easy" | "medium" | "hard";
  vegetarian: boolean;
}

export function highestMinutes(recipes: Recipe[]): string | null {
  let best = null;
  for (const x of recipes) if (best === null || x.minutes > best.minutes) best = x;
  return best ? best.name : null;
}
