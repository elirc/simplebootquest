export function allReposUnder(repos, limit) {
  return repos.every((x) => x.stars <= limit);
}
