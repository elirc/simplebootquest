// mutant: reduce starts from 1 instead of 0
const TASKS = [
  {id: 1, title: "Write tests", estimate: 15, priority: 3, status: "doing", assignee: "linus", blocked: true},
  {id: 2, title: "Add search", estimate: 5, priority: 1, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Deploy API", estimate: 15, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 15, priority: 1, status: "doing", assignee: "ada", blocked: false},
  {id: 5, title: "Review PR", estimate: 9, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Add caching", estimate: 9, priority: 1, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Design schema", estimate: 7, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 8, title: "Write docs", estimate: 13, priority: 4, status: "doing", assignee: "ada", blocked: false}
];

function averageEstimate(tasks) {
  if (tasks.length === 0) return null;
  const total = tasks.reduce((sum, x) => sum + x.estimate, 1);
  return Math.round((total / tasks.length) * 10) / 10;
}
