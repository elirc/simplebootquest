interface Todo {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

export function applyPatch<T extends { id: number }>(entity: T, patch: Partial<T>): T {
  const updates = Object.fromEntries(
    Object.entries(patch).filter(([key, value]) => value !== undefined && key !== 'id'),
  ) as Partial<T>;
  return { ...entity, ...updates };
}

export function toPreview(todo: Todo): Pick<Todo, 'id' | 'title'> {
  return { id: todo.id, title: todo.title };
}

export function diff<T extends object>(before: T, after: T): Partial<T> {
  const changes: Partial<T> = {};
  for (const key of Object.keys(after) as (keyof T)[]) {
    if (before[key] !== after[key]) changes[key] = after[key];
  }
  return changes;
}
