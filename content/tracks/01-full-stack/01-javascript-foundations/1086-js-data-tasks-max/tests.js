const TASKS = [
  {id: 1, title: "Add search", estimate: 1, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 14, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 2, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Update deps", estimate: 5, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 5, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 6, title: "Deploy API", estimate: 13, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Plan sprint", estimate: 15, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Design schema", estimate: 8, priority: 3, status: "done", assignee: "ada", blocked: true}
];

test("an empty list", () => {
  expect(highestPriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(highestPriority(TASKS)).toEqual("Add search");
});
