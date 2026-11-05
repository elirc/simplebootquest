const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 5, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Add caching", estimate: 3, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Design schema", estimate: 7, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 4, title: "Fix CSS", estimate: 4, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 5, title: "Deploy API", estimate: 7, priority: 1, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 8, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Review PR", estimate: 8, priority: 5, status: "doing", assignee: "linus", blocked: true}
];

test("an empty list", () => {
  expect(lowestPriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(lowestPriority(TASKS)).toEqual("Deploy API");
});
