interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function highestCalories(workouts: Workout[]): string | null {
  let best = null;
  for (const x of workouts) if (best === null || x.calories > best.calories) best = x;
  return best ? best.label : null;
}
