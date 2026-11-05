interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function averageCalories(workouts: Workout[]): number | null {
  // TODO
  return 0 as any;
}
