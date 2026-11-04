type Result<T> = { ok: true; data: T } | { ok: false; errors: string[] };

interface TodoInput {
  title: string;
  done: boolean;
  tags: string[];
}

export function parseTodoInput(input: unknown): Result<TodoInput> {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    return { ok: false, errors: ['Input must be an object'] };
  }
  const raw = input as Record<string, unknown>;
  const errors: string[] = [];

  const title = typeof raw.title === 'string' ? raw.title.trim() : '';
  if (title.length === 0) errors.push('title is required');
  else if (title.length > 100) errors.push('title must be at most 100 characters');

  if (raw.done !== undefined && typeof raw.done !== 'boolean') errors.push('done must be a boolean');

  const tagsValid = raw.tags === undefined || (Array.isArray(raw.tags) && raw.tags.every((t) => typeof t === 'string'));
  if (!tagsValid) errors.push('tags must be an array of strings');

  if (errors.length > 0) return { ok: false, errors };
  return {
    ok: true,
    data: { title, done: (raw.done as boolean | undefined) ?? false, tags: (raw.tags as string[] | undefined) ?? [] },
  };
}
