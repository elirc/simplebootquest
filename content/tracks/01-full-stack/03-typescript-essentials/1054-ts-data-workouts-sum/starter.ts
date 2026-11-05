interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function totalMinutes(workouts: Workout[]): number {
  // TODO
  return 0 as any;
}
