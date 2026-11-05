export function averageSecondsPerMood(songs) {
  const groups = {};
  for (const x of songs) (groups[x.mood] ??= []).push(x.seconds);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
