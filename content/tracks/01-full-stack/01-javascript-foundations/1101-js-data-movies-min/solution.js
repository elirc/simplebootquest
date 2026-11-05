export function lowestRating(movies) {
  let best = null;
  for (const x of movies) if (best === null || x.rating < best.rating) best = x;
  return best ? best.title : null;
}
