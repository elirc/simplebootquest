export function averageOpenIssuesPerLanguage(repos) {
  const groups = {};
  for (const x of repos) (groups[x.language] ??= []).push(x.openIssues);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
