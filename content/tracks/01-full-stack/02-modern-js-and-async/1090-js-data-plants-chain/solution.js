export function plantsInLightRanked(plants, value) {
  return plants
    .filter((x) => x.light === value)
    .sort((a, b) => b.heightCm - a.heightCm)
    .map((x) => x.name);
}
