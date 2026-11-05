export function highestWaterEveryDays(plants) {
  let best = null;
  for (const x of plants) if (best === null || x.waterEveryDays > best.waterEveryDays) best = x;
  return best ? best.name : null;
}
