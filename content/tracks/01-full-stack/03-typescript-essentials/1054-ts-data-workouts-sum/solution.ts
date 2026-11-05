interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function totalMinutes(workouts: Workout[]): number {
  return workouts.reduce((sum, x) => sum + x.minutes, 0);
}
