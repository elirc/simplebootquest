interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function workoutsInRange(workouts: Workout[], low: number, high: number): string[] {
  return workouts.filter((x) => x.minutes >= low && x.minutes <= high).map((x) => x.label);
}
