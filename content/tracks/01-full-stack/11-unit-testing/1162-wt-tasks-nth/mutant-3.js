// mutant: off-by-one in the index
const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 14, priority: 1, status: "done", assignee: "grace", blocked: true},
  {id: 2, title: "Fix CSS", estimate: 7, priority: 4, status: "done", assignee: "linus", blocked: true},
  {id: 3, title: "Fix login", estimate: 13, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 4, title: "Write tests", estimate: 5, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 5, title: "Write docs", estimate: 8, priority: 3, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Review PR", estimate: 2, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Plan sprint", estimate: 2, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 8, title: "Deploy API", estimate: 3, priority: 3, status: "doing", assignee: "grace", blocked: false}
];

function nthByPriority(tasks, n) {
  const sorted = [...tasks].sort((a, b) => b.priority - a.priority);
  return n >= 1 && n <= sorted.length ? sorted[n].title : null;
}
