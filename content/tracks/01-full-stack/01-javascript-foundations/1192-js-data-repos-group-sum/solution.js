export function starsPerLanguage(repos) {
  const totals = {};
  for (const x of repos) totals[x.language] = (totals[x.language] ?? 0) + x.stars;
  return totals;
}
