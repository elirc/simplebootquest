function matchObject(actual, expected) {
  if (expected instanceof RegExp) return typeof actual === 'string' && expected.test(actual);
  if (expected instanceof Date) return actual instanceof Date && actual.getTime() === expected.getTime();
  if (Array.isArray(expected)) {
    return Array.isArray(actual) && actual.length === expected.length && expected.every((e, i) => matchObject(actual[i], e));
  }
  if (expected !== null && typeof expected === 'object') {
    if (actual === null || typeof actual !== 'object') return false;
    return Object.keys(expected).every((k) => k in actual && matchObject(actual[k], expected[k]));
  }
  return Object.is(actual, expected);
}
