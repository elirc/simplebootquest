interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function countTasksByAssignee(tasks: Task[], value: string): number {
  // TODO
  return 0 as any;
}
