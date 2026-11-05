export function reposAbove(repos, min) {
  return repos.filter((x) => x.stars > min).map((x) => x.name);
}
