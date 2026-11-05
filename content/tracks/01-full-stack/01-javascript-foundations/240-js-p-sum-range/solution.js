function sumRange(a, b) {
  const [lo, hi] = a <= b ? [a, b] : [b, a];
  let total = 0;
  for (let i = lo; i <= hi; i++) total += i;
  return total;
}

function sumRangeFast(a, b) {
  const count = Math.abs(b - a) + 1;
  return (count * (a + b)) / 2;
}
