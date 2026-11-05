const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

function parseWithDates(text) {
  return JSON.parse(text, (key, value) => (typeof value === 'string' && ISO.test(value) ? new Date(value) : value));
}

function stringifySorted(value) {
  return JSON.stringify(value, (key, v) =>
    v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, v[k]])) : v,
  );
}
