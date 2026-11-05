export function bumpStars(hotels, value, amount) {
  return hotels.map((x) => (x.city !== value ? { ...x, stars: x.stars + amount } : x));
}
