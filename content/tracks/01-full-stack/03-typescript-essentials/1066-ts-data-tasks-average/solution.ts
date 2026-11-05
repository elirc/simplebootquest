interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function averagePriority(tasks: Task[]): number | null {
  if (tasks.length === 0) return null;
  const total = tasks.reduce((sum, x) => sum + x.priority, 0);
  return Math.round((total / tasks.length) * 10) / 10;
}
