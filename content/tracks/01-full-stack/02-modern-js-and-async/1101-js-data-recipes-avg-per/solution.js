export function averageMinutesPerDifficulty(recipes) {
  const groups = {};
  for (const x of recipes) (groups[x.difficulty] ??= []).push(x.minutes);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
