function parse(v) {
  const [major, minor, patch] = v.split('.').map(Number);
  return { major, minor, patch, pre: null };
}
function compare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function bump(v, type) {
  return v;
}
function satisfies(v, range) {
  return v === range;
}
