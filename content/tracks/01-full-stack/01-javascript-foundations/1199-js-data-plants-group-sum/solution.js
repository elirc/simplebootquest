export function heightCmPerLight(plants) {
  const totals = {};
  for (const x of plants) totals[x.light] = (totals[x.light] ?? 0) + x.heightCm;
  return totals;
}
