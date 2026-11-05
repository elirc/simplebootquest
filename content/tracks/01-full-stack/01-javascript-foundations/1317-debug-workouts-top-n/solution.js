export function topWorkoutsByMinutes(workouts, n) {
  return [...workouts].sort((a, b) => b.minutes - a.minutes).slice(0, n).map((x) => x.label);
}
