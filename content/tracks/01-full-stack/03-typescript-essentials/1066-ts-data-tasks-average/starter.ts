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
  // TODO
  return 0 as any;
}
