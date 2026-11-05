export function plantsByWaterEveryDays(plants) {
  return [...plants].sort((a, b) => a.waterEveryDays - b.waterEveryDays).map((x) => x.name);
}
