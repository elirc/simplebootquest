export function reposInRange(repos, low, high) {
  return repos.filter((x) => x.stars > low && x.stars <= high).map((x) => x.name);
}
