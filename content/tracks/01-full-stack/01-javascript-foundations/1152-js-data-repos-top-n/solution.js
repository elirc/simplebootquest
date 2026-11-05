export function topReposByStars(repos, n) {
  return [...repos].sort((a, b) => b.stars - a.stars).slice(0, n).map((x) => x.name);
}
