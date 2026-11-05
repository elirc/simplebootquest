const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 6, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 2, title: "Write tests", estimate: 15, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Update deps", estimate: 12, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Add search", estimate: 12, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Add caching", estimate: 9, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Deploy API", estimate: 11, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Fix login", estimate: 3, priority: 1, status: "done", assignee: "linus", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 6, priority: 5, status: "todo", assignee: "grace", blocked: true}
];

test("an empty list", () => {
  expect(averagePriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(averagePriority(TASKS)).toEqual(3.1);
});
