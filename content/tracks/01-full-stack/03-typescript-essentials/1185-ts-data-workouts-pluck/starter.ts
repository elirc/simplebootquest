interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function summariseWorkouts(workouts: Workout[]): { id: number; label: string; minutes: number }[] {
  // TODO
  return {} as any;
}
