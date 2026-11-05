function buildWhere(userId, query) {
  const where = { userId };
  const q = typeof query.q === 'string' ? query.q.trim() : '';
  if (q) where.title = { contains: q, mode: 'insensitive' };
  if (query.done === 'true') where.done = true;
  if (query.done === 'false') where.done = false;
  const createdAt = {};
  const date = (s) => {
    if (typeof s !== 'string') return null;
    const d = new Date(s);
    return Number.isNaN(d.getTime()) ? null : d;
  };
  const from = date(query.from);
  const to = date(query.to);
  if (from) createdAt.gte = from;
  if (to) createdAt.lt = to;
  if (from || to) where.createdAt = createdAt;
  if (typeof query.tags === 'string') {
    const names = query.tags.split(',').map((t) => t.trim()).filter(Boolean);
    if (names.length) where.tags = { some: { name: { in: names } } };
  }
  return where;
}
