export function reposByStars(repos) {
  return [...repos].sort((a, b) => a.stars - b.stars).map((x) => x.name);
}
