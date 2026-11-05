export function averageYearsAtCompanyPerLevel(employees) {
  const groups = {};
  for (const x of employees) (groups[x.level] ??= []).push(x.yearsAtCompany);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
