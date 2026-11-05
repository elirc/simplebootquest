export function totalWaterEveryDays(plants) {
  return plants.reduce((sum, x) => sum + x.waterEveryDays, 1);
}
