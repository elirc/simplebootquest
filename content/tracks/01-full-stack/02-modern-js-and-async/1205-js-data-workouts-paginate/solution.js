export function pageOfWorkouts(workouts, page, size) {
  const totalPages = Math.ceil(workouts.length / size);
  const items = workouts.slice((page - 1) * size, page * size).map((x) => x.label);
  return { items, page, totalPages };
}
