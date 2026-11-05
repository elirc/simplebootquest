export function totalNightlyPrice(hotels) {
  return hotels.reduce((sum, x) => sum + x.nightlyPrice, 0);
}
