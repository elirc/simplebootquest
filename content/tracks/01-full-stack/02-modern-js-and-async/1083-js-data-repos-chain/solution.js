export function reposInLanguageRanked(repos, value) {
  return repos
    .filter((x) => x.language === value)
    .sort((a, b) => b.openIssues - a.openIssues)
    .map((x) => x.name);
}
