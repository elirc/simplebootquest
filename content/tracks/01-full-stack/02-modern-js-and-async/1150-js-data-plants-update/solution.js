export function bumpWaterEveryDays(plants, value, amount) {
  return plants.map((x) => (x.light === value ? { ...x, waterEveryDays: x.waterEveryDays + amount } : x));
}
