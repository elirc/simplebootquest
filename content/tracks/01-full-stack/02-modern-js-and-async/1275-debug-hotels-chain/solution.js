export function hotelsInCityRanked(hotels, value) {
  return hotels
    .filter((x) => x.city === value)
    .sort((a, b) => b.nightlyPrice - a.nightlyPrice)
    .map((x) => x.name);
}
