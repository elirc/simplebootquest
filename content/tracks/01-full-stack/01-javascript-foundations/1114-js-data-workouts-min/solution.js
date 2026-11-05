export function lowestMinutes(workouts) {
  let best = null;
  for (const x of workouts) if (best === null || x.minutes < best.minutes) best = x;
  return best ? best.label : null;
}
