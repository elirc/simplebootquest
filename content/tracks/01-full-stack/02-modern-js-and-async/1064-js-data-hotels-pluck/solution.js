export function summariseHotels(hotels) {
  return hotels.map(({ id, name, stars }) => ({ id, name, stars }));
}
