export function workoutsById(workouts) {
  const byId = {};
  for (const x of workouts) byId[x.id] = x.label;
  return byId;
}
