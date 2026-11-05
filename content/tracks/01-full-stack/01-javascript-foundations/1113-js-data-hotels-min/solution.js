export function lowestNightlyPrice(hotels) {
  let best = null;
  for (const x of hotels) if (best === null || x.nightlyPrice < best.nightlyPrice) best = x;
  return best ? best.name : null;
}
