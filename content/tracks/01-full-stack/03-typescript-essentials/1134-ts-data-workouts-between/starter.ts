interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function workoutsInRange(workouts: Workout[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
