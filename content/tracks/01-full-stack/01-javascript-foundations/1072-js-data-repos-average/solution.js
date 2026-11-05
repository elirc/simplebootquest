export function averageOpenIssues(repos) {
  if (repos.length === 0) return null;
  const total = repos.reduce((sum, x) => sum + x.openIssues, 0);
  return Math.round((total / repos.length) * 10) / 10;
}
