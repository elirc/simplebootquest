export function topPlantsByWaterEveryDays(plants, n) {
  return [...plants].sort((a, b) => b.waterEveryDays - a.waterEveryDays).slice(0, n).map((x) => x.name);
}
