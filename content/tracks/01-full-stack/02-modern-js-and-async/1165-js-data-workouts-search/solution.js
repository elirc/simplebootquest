export function searchWorkouts(workouts, query) {
  const q = query.trim().toLowerCase();
  return workouts.filter((x) => x.label.toLowerCase().includes(q)).map((x) => x.label);
}
