const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 6, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Deploy API", estimate: 11, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 2, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Add caching", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 8, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Write tests", estimate: 6, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Review PR", estimate: 6, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 8, title: "Update deps", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false}
];

test("an empty list", () => {
  expect(percentBlocked([])).toEqual(0);
});

test("all tasks", () => {
  expect(percentBlocked(TASKS)).toEqual(63);
});
