export function allHotelsUnder(hotels, limit) {
  return hotels.every((x) => x.nightlyPrice < limit);
}
