// mutant: sort direction reversed
const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 7, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 2, title: "Write tests", estimate: 5, priority: 4, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Fix login", estimate: 6, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 4, title: "Update deps", estimate: 7, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 1, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Deploy API", estimate: 5, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 7, title: "Add caching", estimate: 6, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Add search", estimate: 7, priority: 1, status: "done", assignee: "grace", blocked: false}
];

function tasksInStatusRanked(tasks, value) {
  return tasks
    .filter((x) => x.status === value)
    .sort((a, b) => a.estimate - b.estimate)
    .map((x) => x.title);
}
