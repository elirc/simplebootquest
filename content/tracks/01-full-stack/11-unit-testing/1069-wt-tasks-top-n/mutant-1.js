// mutant: sort direction reversed
const TASKS = [
  {id: 1, title: "Write tests", estimate: 12, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Review PR", estimate: 9, priority: 1, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Design schema", estimate: 2, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Plan sprint", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Fix CSS", estimate: 15, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Add search", estimate: 10, priority: 3, status: "done", assignee: "grace", blocked: true},
  {id: 7, title: "Deploy API", estimate: 8, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 8, title: "Write docs", estimate: 15, priority: 4, status: "doing", assignee: "grace", blocked: false}
];

function topTasksByEstimate(tasks, n) {
  return [...tasks].sort((a, b) => a.estimate - b.estimate).slice(0, n).map((x) => x.title);
}
