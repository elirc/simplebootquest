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
  // TODO
  return todos;
}

export function confirm(todos: Todo[], op: Op, saved?: Todo): Todo[] {
  // TODO
  return todos;
}

export function rollback(snapshot: Todo[]): Todo[] {
  return [];
}
