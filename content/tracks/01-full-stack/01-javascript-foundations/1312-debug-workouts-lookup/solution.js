export function minutesOf(workouts, label) {
  const found = workouts.find((x) => x.label === label);
  return found ? found.minutes : null;
}
