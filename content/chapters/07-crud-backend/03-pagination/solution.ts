interface PageQuery {
  page?: string;
  pageSize?: string;
}

function toInt(value: string | undefined): number | null {
  if (value === undefined || !/^-?\d+$/.test(value.trim())) return null;
  return Number(value);
}

export function parsePagination(query: PageQuery) {
  const rawPage = toInt(query.page);
  const page = rawPage !== null && rawPage >= 1 ? rawPage : 1;
  const rawSize = toInt(query.pageSize);
  const pageSize = rawSize === null ? 20 : Math.min(100, Math.max(1, rawSize));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}

export function paginate<T>(items: T[], total: number, page: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return {
    data: items,
    meta: { page, pageSize, total, totalPages, hasNext: page < totalPages, hasPrev: page > 1 },
  };
}
