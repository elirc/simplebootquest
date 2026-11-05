// mutant: `Math.ceil` became `Math.floor`
const TASKS = [
  {id: 1, title: "Review PR", estimate: 12, priority: 3, status: "done", assignee: "grace", blocked: true},
  {id: 2, title: "Add caching", estimate: 12, priority: 5, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Fix CSS", estimate: 4, priority: 1, status: "done", assignee: "grace", blocked: false},
  {id: 4, title: "Plan sprint", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Deploy API", estimate: 13, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Update deps", estimate: 12, priority: 3, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Add search", estimate: 13, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Design schema", estimate: 1, priority: 2, status: "doing", assignee: "linus", blocked: false}
];

function pageOfTasks(tasks, page, size) {
  const totalPages = Math.floor(tasks.length / size);
  const items = tasks.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
