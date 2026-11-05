interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function allWorkoutsUnder(workouts: Workout[], limit: number): boolean {
  // TODO
  return 0 as any;
}
