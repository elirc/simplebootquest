interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function allTasksUnder(tasks: Task[], limit: number): boolean {
  return tasks.every((x) => x.estimate < limit);
}
