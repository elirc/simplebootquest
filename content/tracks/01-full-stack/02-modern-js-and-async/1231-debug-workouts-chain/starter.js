export function workoutsInKindRanked(workouts, value) {
  return workouts
    .filter((x) => x.kind === value)
    .sort((a, b) => a.calories - b.calories)
    .map((x) => x.label);
}
