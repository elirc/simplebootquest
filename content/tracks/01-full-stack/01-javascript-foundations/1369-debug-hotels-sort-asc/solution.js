export function hotelsByStars(hotels) {
  return [...hotels].sort((a, b) => a.stars - b.stars).map((x) => x.name);
}
