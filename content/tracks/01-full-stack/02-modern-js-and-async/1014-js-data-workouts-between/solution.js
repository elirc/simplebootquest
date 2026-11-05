export function workoutsInRange(workouts, low, high) {
  return workouts.filter((x) => x.minutes >= low && x.minutes <= high).map((x) => x.label);
}
