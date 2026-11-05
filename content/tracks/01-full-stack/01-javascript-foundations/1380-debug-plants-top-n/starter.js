export function topPlantsByWaterEveryDays(plants, n) {
  return [...plants].sort((a, b) => a.waterEveryDays - b.waterEveryDays).slice(0, n).map((x) => x.name);
}
