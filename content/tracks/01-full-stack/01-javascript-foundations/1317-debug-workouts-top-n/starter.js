export function topWorkoutsByMinutes(workouts, n) {
  return [...workouts].sort((a, b) => a.minutes - b.minutes).slice(0, n).map((x) => x.label);
}
