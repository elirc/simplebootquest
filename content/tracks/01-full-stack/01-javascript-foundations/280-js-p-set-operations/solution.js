const uniq = (arr) => [...new Set(arr)];
function union(a, b) {
  return uniq([...a, ...b]);
}
function intersection(a, b) {
  const sb = new Set(b);
  return uniq(a.filter((x) => sb.has(x)));
}
function difference(a, b) {
  const sb = new Set(b);
  return uniq(a.filter((x) => !sb.has(x)));
}
function symmetricDifference(a, b) {
  return [...difference(a, b), ...difference(b, a)];
}
