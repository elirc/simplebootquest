// mutant: accepts decimals
function parseQuantity(input) {
  const trimmed = String(input).trim();
  if (!/^-?[\d.]+$/.test(trimmed)) throw new TypeError('Quantity must be a whole number');
  const n = Number(trimmed);
  if (n < 1 || n > 99) throw new RangeError('Quantity must be between 1 and 99');
  return n;
}
