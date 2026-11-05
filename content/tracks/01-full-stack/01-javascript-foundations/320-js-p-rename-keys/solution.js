function renameKeys(obj, mapping) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [mapping[k] ?? k, v]));
}

function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
