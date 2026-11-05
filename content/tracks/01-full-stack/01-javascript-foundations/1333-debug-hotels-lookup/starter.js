export function starsOf(hotels, name) {
  const found = hotels.find((x) => x.name !== name);
  return found ? found.stars : null;
}
