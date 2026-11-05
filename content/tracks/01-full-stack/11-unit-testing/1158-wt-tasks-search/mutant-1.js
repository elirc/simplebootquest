// mutant: search became case-sensitive
const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 8, priority: 3, status: "done", assignee: "linus", blocked: false},
  {id: 2, title: "Update deps", estimate: 3, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Plan sprint", estimate: 15, priority: 1, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Design schema", estimate: 7, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 6, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Write tests", estimate: 2, priority: 1, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write docs", estimate: 11, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Review PR", estimate: 10, priority: 4, status: "doing", assignee: "ada", blocked: false}
];

function searchTasks(tasks, query) {
  const q = query.trim();
  return tasks.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
