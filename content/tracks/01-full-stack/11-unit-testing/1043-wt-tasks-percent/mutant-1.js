// mutant: condition negated: `===` became `!==`
const TASKS = [
  {id: 1, title: "Add search", estimate: 2, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Review PR", estimate: 9, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 3, title: "Fix login", estimate: 15, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 4, title: "Refactor auth", estimate: 11, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Fix CSS", estimate: 7, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Update deps", estimate: 7, priority: 5, status: "todo", assignee: "ada", blocked: false},
  {id: 7, title: "Deploy API", estimate: 7, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 8, title: "Write docs", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true}
];

function percentBlocked(tasks) {
  if (tasks.length !== 0) return 0;
  return Math.round((tasks.filter((x) => x.blocked).length / tasks.length) * 100);
}
