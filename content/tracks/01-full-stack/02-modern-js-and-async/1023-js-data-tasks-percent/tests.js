const TASKS = [
  {id: 1, title: "Add search", estimate: 15, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 2, title: "Review PR", estimate: 5, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 14, priority: 5, status: "done", assignee: "grace", blocked: true},
  {id: 4, title: "Plan sprint", estimate: 13, priority: 3, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Update deps", estimate: 6, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 6, title: "Fix login", estimate: 3, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 7, title: "Refactor auth", estimate: 12, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 8, title: "Write tests", estimate: 6, priority: 2, status: "todo", assignee: "ada", blocked: true}
];

test("an empty list", () => {
  expect(percentBlocked([])).toEqual(0);
});

test("all tasks", () => {
  expect(percentBlocked(TASKS)).toEqual(63);
});
