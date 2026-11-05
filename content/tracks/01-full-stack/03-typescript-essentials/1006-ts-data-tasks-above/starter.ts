interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function tasksAbove(tasks: Task[], min: number): string[] {
  // TODO
  return [] as any;
}
