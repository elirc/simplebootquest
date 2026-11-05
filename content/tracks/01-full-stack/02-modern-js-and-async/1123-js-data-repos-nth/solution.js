export function nthByOpenIssues(repos, n) {
  const sorted = [...repos].sort((a, b) => b.openIssues - a.openIssues);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
