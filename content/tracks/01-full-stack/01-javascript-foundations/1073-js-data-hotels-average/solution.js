export function averageNightlyPrice(hotels) {
  if (hotels.length === 0) return null;
  const total = hotels.reduce((sum, x) => sum + x.nightlyPrice, 0);
  return Math.round((total / hotels.length) * 10) / 10;
}
