interface TodoQuery {
  done?: string;
  q?: string;
  priority?: string;
  sort?: string;
  ownerId?: string;
}

const SORTABLE = ['title', 'createdAt', 'priority'];
const PRIORITIES = ['low', 'medium', 'high'];

export function buildTodoQuery(userId: number, query: TodoQuery) {
  const where: Record<string, unknown> = { ownerId: userId };

  if (query.done === 'true') where.done = true;
  else if (query.done === 'false') where.done = false;

  const q = query.q?.trim();
  if (q) where.title = { contains: q, mode: 'insensitive' };

  if (query.priority && PRIORITIES.includes(query.priority)) where.priority = query.priority;

  let orderBy: Record<string, 'asc' | 'desc'> = { createdAt: 'desc' };
  if (query.sort) {
    const desc = query.sort.startsWith('-');
    const field = desc ? query.sort.slice(1) : query.sort;
    if (SORTABLE.includes(field)) orderBy = { [field]: desc ? 'desc' : 'asc' };
  }

  return { where, orderBy };
}
