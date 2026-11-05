export function topHotelsByStars(hotels, n) {
  return [...hotels].sort((a, b) => b.stars - a.stars).slice(0, n).map((x) => x.name);
}
