export function nthByAge(students, n) {
  const sorted = [...students].sort((a, b) => b.age - a.age);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
