// mutant: mutates the original objects
const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 8, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Write docs", estimate: 6, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Add caching", estimate: 14, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Design schema", estimate: 7, priority: 3, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Review PR", estimate: 8, priority: 1, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Deploy API", estimate: 4, priority: 3, status: "todo", assignee: "ada", blocked: false},
  {id: 7, title: "Add search", estimate: 15, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 5, priority: 5, status: "done", assignee: "ada", blocked: true}
];

function bumpPriority(tasks, value, amount) {
  return tasks.map((x) => (x.status === value ? Object.assign(x, { priority: x.priority + amount } : x));
}
