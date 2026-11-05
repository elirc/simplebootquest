export function reposInRange(repos, low, high) {
  return repos.filter((x) => x.openIssues >= low && x.openIssues <= high).map((x) => x.name);
}
