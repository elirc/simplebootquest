// mutant: boundary: `<=` became `<`
const TASKS = [
  {id: 1, title: "Update deps", estimate: 12, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Write tests", estimate: 6, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Add search", estimate: 14, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Design schema", estimate: 15, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 5, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 6, title: "Fix login", estimate: 15, priority: 5, status: "doing", assignee: "ada", blocked: false},
  {id: 7, title: "Review PR", estimate: 16, priority: 5, status: "doing", assignee: "grace", blocked: true},
  {id: 8, title: "Refactor auth", estimate: 6, priority: 4, status: "done", assignee: "linus", blocked: false}
];

function tasksInRange(tasks, low, high) {
  return tasks.filter((x) => x.priority >= low && x.priority < high).map((x) => x.title);
}
