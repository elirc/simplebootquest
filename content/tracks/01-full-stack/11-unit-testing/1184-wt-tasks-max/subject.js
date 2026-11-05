const TASKS = [
  {id: 1, title: "Update deps", estimate: 15, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 2, title: "Write tests", estimate: 2, priority: 1, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Add search", estimate: 7, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Deploy API", estimate: 10, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 5, title: "Write docs", estimate: 8, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 13, priority: 1, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Add caching", estimate: 15, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 12, priority: 3, status: "todo", assignee: "ada", blocked: false}
];

function highestEstimate(tasks) {
  let best = null;
  for (const x of tasks) if (best === null || x.estimate > best.estimate) best = x;
  return best ? best.title : null;
}
