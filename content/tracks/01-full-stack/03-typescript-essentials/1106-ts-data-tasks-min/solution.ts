interface Task {
  id: number;
  title: string;
  estimate: number;
  priority: number;
  status: "todo" | "doing" | "done";
  assignee: "ada" | "grace" | "linus";
  blocked: boolean;
}

export function lowestEstimate(tasks: Task[]): string | null {
  let best = null;
  for (const x of tasks) if (best === null || x.estimate < best.estimate) best = x;
  return best ? best.title : null;
}
