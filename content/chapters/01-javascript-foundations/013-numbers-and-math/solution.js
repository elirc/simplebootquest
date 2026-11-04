function roundTo(n, decimals) {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (const n of numbers) sum += n;
  return sum / numbers.length;
}

function isWhole(n) {
  return Number.isInteger(n);
}
