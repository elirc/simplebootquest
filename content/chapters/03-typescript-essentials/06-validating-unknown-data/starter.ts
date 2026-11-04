type Result<T> = { ok: true; data: T } | { ok: false; errors: string[] };

interface TodoInput {
  title: string;
  done: boolean;
  tags: string[];
}

export function parseTodoInput(input: unknown): Result<TodoInput> {
  // TODO
  return { ok: false, errors: [] };
}
