type Status = 'todo' | 'doing' | 'done';
interface Task { title: string; status: Status }

export function countStatuses(tasks: Task[]) {
  return {};
}

export function columns(tasks: Task[]) {
  return {};
}

export function lookup(dict: Record<string, number>, key: string, fallback: number): number {
  return dict[key] || fallback;
}
