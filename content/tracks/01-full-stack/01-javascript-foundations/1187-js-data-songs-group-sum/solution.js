export function secondsPerMood(songs) {
  const totals = {};
  for (const x of songs) totals[x.mood] = (totals[x.mood] ?? 0) + x.seconds;
  return totals;
}
