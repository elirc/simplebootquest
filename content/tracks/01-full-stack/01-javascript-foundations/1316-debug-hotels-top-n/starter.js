export function topHotelsByStars(hotels, n) {
  return [...hotels].sort((a, b) => a.stars - b.stars).slice(0, n).map((x) => x.name);
}
