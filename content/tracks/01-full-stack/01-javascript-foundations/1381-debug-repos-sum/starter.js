export function totalOpenIssues(repos) {
  return repos.reduce((sum, x) => sum + x.openIssues, 1);
}
