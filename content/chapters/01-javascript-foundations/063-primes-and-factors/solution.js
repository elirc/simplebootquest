function isPrime(n) {
  if (n < 2) return false;
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) return false;
  }
  return true;
}

function primesUpTo(n) {
  const out = [];
  for (let i = 2; i <= n; i++) if (isPrime(i)) out.push(i);
  return out;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function primeFactors(n) {
  const factors = [];
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
    d++;
  }
  return factors;
}
