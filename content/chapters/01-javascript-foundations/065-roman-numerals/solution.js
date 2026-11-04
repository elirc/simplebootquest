const TABLE = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];
const VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function toRoman(n) {
  let out = '';
  for (const [value, symbol] of TABLE) {
    while (n >= value) {
      out += symbol;
      n -= value;
    }
  }
  return out;
}

function fromRoman(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = VALUES[s[i]];
    const next = VALUES[s[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  return total;
}
