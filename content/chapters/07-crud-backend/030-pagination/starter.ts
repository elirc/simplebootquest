interface PageQuery {
  page?: string;
  pageSize?: string;
}

export function parsePagination(query: PageQuery) {
  // TODO
  return { page: 1, pageSize: 20, skip: 0, take: 0 };
}

export function paginate<T>(items: T[], total: number, page: number, pageSize: number) {
  // TODO
  return { data: items, meta: {} };
}
