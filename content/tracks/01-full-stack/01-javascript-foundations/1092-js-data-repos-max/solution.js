export function highestStars(repos) {
  let best = null;
  for (const x of repos) if (best === null || x.stars > best.stars) best = x;
  return best ? best.name : null;
}
