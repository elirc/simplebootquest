export function totalStars(hotels) {
  return hotels.reduce((sum, x) => sum + x.stars, 0);
}
