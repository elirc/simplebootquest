type Status = 'todo' | 'doing' | 'done';
interface Task { title: string; status: Status }

export function countStatuses(tasks: Task[]): Record<Status, number> {
  const counts: Record<Status, number> = { todo: 0, doing: 0, done: 0 };
  for (const t of tasks) counts[t.status]++;
  return counts;
}

export function columns(tasks: Task[]): Record<Status, string[]> {
  const cols: Record<Status, string[]> = { todo: [], doing: [], done: [] };
  for (const t of tasks) cols[t.status].push(t.title);
  return cols;
}

export function lookup(dict: Record<string, number>, key: string, fallback: number): number {
  return dict[key] ?? fallback;
}
