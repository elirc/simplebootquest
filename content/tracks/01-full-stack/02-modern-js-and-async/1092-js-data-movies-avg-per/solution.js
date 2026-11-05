export function averageYearPerGenre(movies) {
  const groups = {};
  for (const x of movies) (groups[x.genre] ??= []).push(x.year);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
