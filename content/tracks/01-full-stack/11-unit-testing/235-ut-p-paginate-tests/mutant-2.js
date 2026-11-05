// mutant: empty list has zero pages
function paginate(items, page, pageSize) {
  if (!Number.isInteger(pageSize) || pageSize < 1) throw new RangeError('pageSize must be a positive integer');
  const totalPages = Math.ceil(items.length / pageSize);
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    page: current,
    totalPages,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}
