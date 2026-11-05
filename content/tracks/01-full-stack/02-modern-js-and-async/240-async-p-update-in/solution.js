function updateIn(obj, path, fn) {
  if (path.length === 0) return fn(obj);
  const [key, ...rest] = path;
  const copy = Array.isArray(obj) ? [...obj] : { ...obj };
  copy[key] = updateIn(obj?.[key], rest, fn);
  return copy;
}
