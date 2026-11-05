const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 14, priority: 1, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Design schema", estimate: 2, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 3, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Deploy API", estimate: 13, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 5, title: "Add search", estimate: 13, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Fix login", estimate: 15, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Add caching", estimate: 7, priority: 4, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 5, priority: 2, status: "done", assignee: "ada", blocked: false}
];

test("an empty list", () => {
  expect(totalEstimate([])).toEqual(0);
});

test("all tasks", () => {
  expect(totalEstimate(TASKS)).toEqual(72);
});
