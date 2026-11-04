function get(obj, path, fallback) {
  let current = obj;
  for (const key of path.split('.')) {
    if (current === null || current === undefined || !(key in Object(current))) return fallback;
    current = current[key];
  }
  return current;
}

function set(obj, path, value) {
  const [key, ...rest] = path.split('.');
  const current = obj ?? {};
  if (rest.length === 0) return { ...current, [key]: value };
  return { ...current, [key]: set(current[key], rest.join('.'), value) };
}

function countKeys(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    count++;
    if (value && typeof value === 'object' && !Array.isArray(value)) count += countKeys(value);
  }
  return count;
}
