interface TodoQuery {
  done?: string;
  q?: string;
  priority?: string;
  sort?: string;
  ownerId?: string;
}

export function buildTodoQuery(userId: number, query: TodoQuery) {
  const where: Record<string, unknown> = {};
  let orderBy: Record<string, 'asc' | 'desc'> = {};
  // TODO
  return { where, orderBy };
}
