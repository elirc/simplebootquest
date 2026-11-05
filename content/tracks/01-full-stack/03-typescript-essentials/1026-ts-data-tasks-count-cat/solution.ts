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
  let count = 0;
  for (const x of tasks) if (x.assignee === value) count++;
  return count;
}
