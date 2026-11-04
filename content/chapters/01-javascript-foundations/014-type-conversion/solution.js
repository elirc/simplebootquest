function toNumber(input) {
  const trimmed = input.trim();
  if (trimmed === '') return null;
  const n = Number(trimmed);
  return Number.isNaN(n) ? null : n;
}

function parseBool(input) {
  const v = input.trim().toLowerCase();
  if (['true', '1', 'yes', 'on'].includes(v)) return true;
  if (['false', '0', 'no', 'off'].includes(v)) return false;
  return null;
}

function addStrings(a, b) {
  return Number(a) + Number(b);
}
