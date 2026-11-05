const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 13, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 2, title: "Add search", estimate: 7, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Deploy API", estimate: 6, priority: 5, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 15, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Fix login", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 10, priority: 1, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Update deps", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 14, priority: 3, status: "doing", assignee: "linus", blocked: true}
];

test("with 3", () => {
  expect(tasksAbove(TASKS, 3)).toEqual(["Add search","Deploy API"]);
});

test("with 3", () => {
  expect(tasksAbove(TASKS, 3)).toEqual(["Add search","Deploy API"]);
});

test("with 999999", () => {
  expect(tasksAbove(TASKS, 999999)).toEqual([]);
});
