function rotate(array, k) {
  const n = array.length;
  if (n === 0) return [];
  const shift = ((k % n) + n) % n;
  return [...array.slice(n - shift), ...array.slice(0, n - shift)];
}
