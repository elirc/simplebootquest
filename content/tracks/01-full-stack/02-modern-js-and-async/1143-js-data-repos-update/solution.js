export function bumpStars(repos, value, amount) {
  return repos.map((x) => (x.language === value ? { ...x, stars: x.stars + amount } : x));
}
