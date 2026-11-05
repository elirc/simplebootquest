interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function countWorkoutsByKind(workouts: Workout[], value: string): number {
  // TODO
  return 0 as any;
}
