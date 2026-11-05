export function averageHeightCm(plants) {
  if (plants.length === 0) return null;
  const total = plants.reduce((sum, x) => sum + x.heightCm, 0);
  return Math.round((total / plants.length) * 10) / 10;
}
