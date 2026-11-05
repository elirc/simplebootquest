export function averageWaterEveryDaysPerLight(plants) {
  const groups = {};
  for (const x of plants) (groups[x.light] ??= []).push(x.waterEveryDays);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
