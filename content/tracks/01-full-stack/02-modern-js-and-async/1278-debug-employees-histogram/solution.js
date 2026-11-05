export function yearsAtCompanyHistogram(employees, width) {
  const buckets = {};
  for (const x of employees) {
    const key = Math.floor(x.yearsAtCompany / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
