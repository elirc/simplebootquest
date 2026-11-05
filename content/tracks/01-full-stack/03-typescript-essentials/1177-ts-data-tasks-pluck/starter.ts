interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function summariseTasks(tasks: Task[]): { id: number; title: string; estimate: number }[] {
  // TODO
  return {} as any;
}
