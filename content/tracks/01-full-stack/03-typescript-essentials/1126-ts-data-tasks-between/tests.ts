const TASKS = [
  {id: 1, title: "Review PR", estimate: 10, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Fix login", estimate: 1, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Design schema", estimate: 10, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 4, title: "Write tests", estimate: 5, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 2, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 11, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Write docs", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 8, title: "Update deps", estimate: 3, priority: 2, status: "todo", assignee: "ada", blocked: false}
];

test("with 3, 10", () => {
  expect(tasksInRange(TASKS, 3, 10)).toEqual(["Review PR","Design schema","Write tests","Write docs","Update deps"]);
});

test("with 10, 10", () => {
  expect(tasksInRange(TASKS, 10, 10)).toEqual(["Review PR","Design schema","Write docs"]);
});

test("with 3, 3", () => {
  expect(tasksInRange(TASKS, 3, 3)).toEqual(["Update deps"]);
});
