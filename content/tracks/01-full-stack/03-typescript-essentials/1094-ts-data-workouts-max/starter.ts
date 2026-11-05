interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function highestCalories(workouts: Workout[]): string | null {
  // TODO
  return 0 as any;
}
