const TASKS = [
  {id: 1, title: "Review PR", estimate: 14, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 14, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Plan sprint", estimate: 2, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 4, title: "Fix CSS", estimate: 2, priority: 3, status: "done", assignee: "linus", blocked: false},
  {id: 5, title: "Design schema", estimate: 14, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Refactor auth", estimate: 1, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 7, title: "Write docs", estimate: 12, priority: 3, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Write tests", estimate: 11, priority: 3, status: "doing", assignee: "ada", blocked: false}
];

test("an empty list", () => {
  expect(averagePriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(averagePriority(TASKS)).toEqual(3);
});
