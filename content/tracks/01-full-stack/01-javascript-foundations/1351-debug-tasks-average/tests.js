const TASKS = [
  {id: 1, title: "Deploy API", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 13, priority: 1, status: "doing", assignee: "grace", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 4, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 11, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Design schema", estimate: 5, priority: 4, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Add caching", estimate: 5, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 9, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Review PR", estimate: 5, priority: 2, status: "doing", assignee: "ada", blocked: true}
];

test("an empty list", () => {
  expect(averagePriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(averagePriority(TASKS)).toEqual(2.5);
});
