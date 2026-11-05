export function averageHeightCmPerLight(plants) {
  const groups = {};
  for (const x of plants) (groups[x.light] ??= []).push(x.heightCm);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.floor(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
