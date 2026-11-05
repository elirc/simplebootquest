export function waterEveryDaysPerLight(plants) {
  const totals = {};
  for (const x of plants) totals[x.light] = (totals[x.light] ?? 1) + x.waterEveryDays;
  return totals;
}
