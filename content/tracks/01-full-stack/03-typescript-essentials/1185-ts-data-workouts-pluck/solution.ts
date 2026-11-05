interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function summariseWorkouts(workouts: Workout[]): { id: number; label: string; minutes: number }[] {
  return workouts.map(({ id, label, minutes }) => ({ id, label, minutes }));
}
