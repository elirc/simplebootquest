export function hotelsByStars(hotels) {
  return [...hotels].sort((a, b) => b.stars - a.stars).map((x) => x.name);
}
