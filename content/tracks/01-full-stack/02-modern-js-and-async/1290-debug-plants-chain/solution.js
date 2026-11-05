export function plantsInLightRanked(plants, value) {
  return plants
    .filter((x) => x.light === value)
    .sort((a, b) => b.waterEveryDays - a.waterEveryDays)
    .map((x) => x.name);
}
