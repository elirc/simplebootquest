interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function allWorkoutsUnder(workouts: Workout[], limit: number): boolean {
  return workouts.every((x) => x.calories < limit);
}
