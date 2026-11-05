export function openIssuesOf(repos, name) {
  const found = repos.find((x) => x.name === name);
  return found ? found.openIssues : null;
}
