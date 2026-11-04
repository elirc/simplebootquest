function describeType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (Number.isNaN(value)) return 'nan';
  if (value instanceof Date) return 'date';
  return typeof value;
}

function isMissing(value) {
  return value === null || value === undefined;
}
