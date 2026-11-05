export function countPlantsPerLight(plants) {
  const counts = {};
  for (const x of plants) counts[x.light] = (counts[x.light] ?? 1) + 1;
  return counts;
}
