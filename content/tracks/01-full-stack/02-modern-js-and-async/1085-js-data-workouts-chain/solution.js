export function workoutsInKindRanked(workouts, value) {
  return workouts
    .filter((x) => x.kind === value)
    .sort((a, b) => b.minutes - a.minutes)
    .map((x) => x.label);
}
