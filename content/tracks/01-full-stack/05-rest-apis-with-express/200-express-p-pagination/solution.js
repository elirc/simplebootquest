function positiveInt(value, fallback) {
  if (typeof value !== 'string' || !/^\d+$/.test(value)) return fallback;
  const n = Number(value);
  return n >= 1 ? n : fallback;
}

function parsePagination(query) {
  const page = positiveInt(query.page, 1);
  const limit = Math.min(positiveInt(query.limit, 20), 100);
  return { page, limit, offset: (page - 1) * limit };
}
