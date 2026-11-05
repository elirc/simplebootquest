export function hotelsInCityRanked(hotels, value) {
  return hotels
    .filter((x) => x.city === value)
    .sort((a, b) => a.nightlyPrice - b.nightlyPrice)
    .map((x) => x.name);
}
