export function plantsInLightRanked(plants, value) {
  return plants
    .filter((x) => x.light === value)
    .sort((a, b) => a.waterEveryDays - b.waterEveryDays)
    .map((x) => x.name);
}
