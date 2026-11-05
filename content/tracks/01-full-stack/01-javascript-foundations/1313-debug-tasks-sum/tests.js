const TASKS = [
  {id: 1, title: "Write docs", estimate: 5, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 2, title: "Add caching", estimate: 8, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Deploy API", estimate: 11, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Review PR", estimate: 8, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 5, title: "Fix login", estimate: 7, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Fix CSS", estimate: 11, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Add search", estimate: 10, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Refactor auth", estimate: 12, priority: 4, status: "doing", assignee: "linus", blocked: true}
];

test("an empty list", () => {
  expect(totalPriority([])).toEqual(0);
});

test("all tasks", () => {
  expect(totalPriority(TASKS)).toEqual(26);
});
