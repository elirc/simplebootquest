interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function workoutsAbove(workouts: Workout[], min: number): string[] {
  return workouts.filter((x) => x.minutes > min).map((x) => x.label);
}
