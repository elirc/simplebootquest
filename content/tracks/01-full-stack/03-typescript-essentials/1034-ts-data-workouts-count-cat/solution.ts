interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function countWorkoutsByKind(workouts: Workout[], value: string): number {
  let count = 0;
  for (const x of workouts) if (x.kind === value) count++;
  return count;
}
