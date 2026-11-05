export function describeRepos(repos) {
  return repos.map((x) => `${x.name} (${x.stars})`);
}
