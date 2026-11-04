interface Todo {
  id: number | string;
  title: string;
  done: boolean;
  pending?: boolean;
}

type Op =
  | { kind: 'create'; tempId: string; data: Omit<Todo, 'id'> }
  | { kind: 'update'; id: number | string; changes: Partial<Todo> }
  | { kind: 'delete'; id: number | string };

export function applyOptimistic(todos: Todo[], op: Op): Todo[] {
  switch (op.kind) {
    case 'create':
      return [...todos, { id: op.tempId, ...op.data, pending: true }];
    case 'update':
      return todos.map((t) => (t.id === op.id ? { ...t, ...op.changes, pending: true } : t));
    case 'delete':
      return todos.filter((t) => t.id !== op.id);
  }
}

export function confirm(todos: Todo[], op: Op, saved?: Todo): Todo[] {
  if (op.kind === 'delete' || !saved) return todos;
  const targetId = op.kind === 'create' ? op.tempId : op.id;
  return todos.map((t) => (t.id === targetId ? saved : t));
}

export function rollback(snapshot: Todo[]): Todo[] {
  return snapshot;
}
