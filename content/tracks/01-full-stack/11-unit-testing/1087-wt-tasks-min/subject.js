const TASKS = [
  {id: 1, title: "Review PR", estimate: 7, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 2, title: "Add caching", estimate: 6, priority: 1, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Deploy API", estimate: 5, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 4, title: "Design schema", estimate: 7, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 5, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 6, title: "Plan sprint", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 7, title: "Fix CSS", estimate: 8, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 8, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "linus", blocked: true}
];

function lowestEstimate(tasks) {
  let best = null;
  for (const x of tasks) if (best === null || x.estimate < best.estimate) best = x;
  return best ? best.title : null;
}
