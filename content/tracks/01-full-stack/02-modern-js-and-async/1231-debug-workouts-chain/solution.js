export function workoutsInKindRanked(workouts, value) {
  return workouts
    .filter((x) => x.kind === value)
    .sort((a, b) => b.calories - a.calories)
    .map((x) => x.label);
}
