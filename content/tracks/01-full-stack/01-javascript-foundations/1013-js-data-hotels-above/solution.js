export function hotelsAbove(hotels, min) {
  return hotels.filter((x) => x.stars > min).map((x) => x.name);
}
