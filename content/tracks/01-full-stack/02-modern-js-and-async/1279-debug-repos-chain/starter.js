export function reposInLanguageRanked(repos, value) {
  return repos
    .filter((x) => x.language === value)
    .sort((a, b) => a.openIssues - b.openIssues)
    .map((x) => x.name);
}
