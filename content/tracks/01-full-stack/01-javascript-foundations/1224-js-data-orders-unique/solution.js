export function distinctCountrys(orders) {
  return [...new Set(orders.map((x) => x.country))].sort();
}
