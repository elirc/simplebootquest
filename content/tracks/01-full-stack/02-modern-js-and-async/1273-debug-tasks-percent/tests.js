const TASKS = [
  {id: 1, title: "Review PR", estimate: 15, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Add search", estimate: 12, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Refactor auth", estimate: 13, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Plan sprint", estimate: 1, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 11, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Deploy API", estimate: 11, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write tests", estimate: 16, priority: 5, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 1, priority: 2, status: "done", assignee: "linus", blocked: false}
];

test("an empty list", () => {
  expect(percentBlocked([])).toEqual(0);
});

test("all tasks", () => {
  expect(percentBlocked(TASKS)).toEqual(38);
});
