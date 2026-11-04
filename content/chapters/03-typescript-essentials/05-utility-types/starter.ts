interface Todo {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

export function applyPatch<T extends { id: number }>(entity: T, patch: Partial<T>): T {
  // TODO
  return entity;
}

export function toPreview(todo: Todo): Pick<Todo, 'id' | 'title'> {
  // TODO
  return todo;
}

export function diff<T extends object>(before: T, after: T): Partial<T> {
  // TODO
  return {};
}
