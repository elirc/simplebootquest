interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function percentBlocked(tasks: Task[]): number {
  if (tasks.length === 0) return 0;
  return Math.round((tasks.filter((x) => x.blocked).length / tasks.length) * 100);
}
