function buildWhere(userId, query) {
  return { userId, ...query };
}
