interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function totalEstimate(tasks: Task[]): number {
  return tasks.reduce((sum, x) => sum + x.estimate, 0);
}
