interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function workoutsAbove(workouts: Workout[], min: number): string[] {
  // TODO
  return [] as any;
}
