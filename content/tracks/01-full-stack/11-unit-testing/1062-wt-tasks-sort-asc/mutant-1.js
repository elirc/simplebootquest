// mutant: sort direction reversed
const TASKS = [
  {id: 1, title: "Fix login", estimate: 12, priority: 3, status: "done", assignee: "linus", blocked: false},
  {id: 2, title: "Add search", estimate: 8, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 3, title: "Design schema", estimate: 15, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 4, title: "Write tests", estimate: 5, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Fix CSS", estimate: 6, priority: 3, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Deploy API", estimate: 14, priority: 2, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Plan sprint", estimate: 3, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 8, title: "Review PR", estimate: 7, priority: 1, status: "todo", assignee: "linus", blocked: true}
];

function tasksByEstimate(tasks) {
  return [...tasks].sort((a, b) => b.estimate - a.estimate).map((x) => x.title);
}
