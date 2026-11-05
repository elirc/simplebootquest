export function hotelsInRange(hotels, low, high) {
  return hotels.filter((x) => x.nightlyPrice >= low && x.nightlyPrice <= high).map((x) => x.name);
}
