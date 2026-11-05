function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be a non-negative integer');
  if (n > 20) {
    let big = 1n;
    for (let i = 2n; i <= BigInt(n); i++) big *= i;
    return big;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
