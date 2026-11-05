export function describeHotels(hotels) {
  return hotels.map((x) => `${x.name} (${x.stars})`);
}
