export function highestStars(hotels) {
  let best = null;
  for (const x of hotels) if (best === null || x.stars > best.stars) best = x;
  return best ? best.name : null;
}
