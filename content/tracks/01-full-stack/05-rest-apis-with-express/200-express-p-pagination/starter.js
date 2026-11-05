function parsePagination(query) {
  const page = Number(query.page);
  const limit = Number(query.limit);
  return { page, limit, offset: page * limit };
}
