export function percentBreakfast(hotels) {
  if (hotels.length === 0) return 0;
  return Math.round((hotels.filter((x) => x.breakfast).length / hotels.length) * 100);
}
