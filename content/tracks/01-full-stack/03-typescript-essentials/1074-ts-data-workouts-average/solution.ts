interface Workout {
  id: number;
  label: string;
  minutes: number;
  calories: number;
  kind: "cardio" | "strength" | "mobility";
}

export function averageCalories(workouts: Workout[]): number | null {
  if (workouts.length === 0) return null;
  const total = workouts.reduce((sum, x) => sum + x.calories, 0);
  return Math.round((total / workouts.length) * 10) / 10;
}
