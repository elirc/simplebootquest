const TASKS = [
  {id: 1, title: "Fix login", estimate: 7, priority: 5, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Review PR", estimate: 10, priority: 1, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 12, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Deploy API", estimate: 7, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 6, title: "Add search", estimate: 14, priority: 4, status: "doing", assignee: "linus", blocked: true},
  {id: 7, title: "Add caching", estimate: 11, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 5, priority: 4, status: "todo", assignee: "grace", blocked: false}
];

test("an empty list", () => {
  expect(lowestEstimate([])).toEqual(null);
});

test("all tasks", () => {
  expect(lowestEstimate(TASKS)).toEqual("Plan sprint");
});
