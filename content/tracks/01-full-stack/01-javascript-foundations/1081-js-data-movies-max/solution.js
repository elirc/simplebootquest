export function highestYear(movies) {
  let best = null;
  for (const x of movies) if (best === null || x.year > best.year) best = x;
  return best ? best.title : null;
}
