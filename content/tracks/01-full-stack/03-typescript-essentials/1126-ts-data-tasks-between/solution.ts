interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function tasksInRange(tasks: Task[], low: number, high: number): string[] {
  return tasks.filter((x) => x.estimate >= low && x.estimate <= high).map((x) => x.title);
}
