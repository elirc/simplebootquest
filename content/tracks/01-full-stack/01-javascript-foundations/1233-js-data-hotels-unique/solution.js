export function distinctCitys(hotels) {
  return [...new Set(hotels.map((x) => x.city))].sort();
}
