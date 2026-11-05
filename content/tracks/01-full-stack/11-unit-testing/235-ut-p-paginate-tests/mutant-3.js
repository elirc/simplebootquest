// mutant: zero-based offset
function paginate(items, page, pageSize) {
  if (!Number.isInteger(pageSize) || pageSize < 1) throw new RangeError('pageSize must be a positive integer');
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = current * pageSize - pageSize + (current > 1 ? 1 : 0);
  return {
    items: items.slice(start, start + pageSize),
    page: current,
    totalPages,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}
