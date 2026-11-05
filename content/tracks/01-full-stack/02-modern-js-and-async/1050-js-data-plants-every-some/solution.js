export function allPlantsUnder(plants, limit) {
  return plants.every((x) => x.waterEveryDays < limit);
}
