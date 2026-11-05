export function plantsByWaterEveryDays(plants) {
  return [...plants].sort((a, b) => b.waterEveryDays - a.waterEveryDays).map((x) => x.name);
}
