export function minutesPerKind(workouts) {
  const totals = {};
  for (const x of workouts) totals[x.kind] = (totals[x.kind] ?? 0) + x.minutes;
  return totals;
}
