const TASKS = [
  {id: 1, title: "Deploy API", estimate: 10, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Add search", estimate: 9, priority: 4, status: "todo", assignee: "linus", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Refactor auth", estimate: 5, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 6, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Update deps", estimate: 13, priority: 5, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write docs", estimate: 15, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 8, title: "Fix CSS", estimate: 8, priority: 4, status: "todo", assignee: "linus", blocked: true}
];

test("with 1", () => {
  expect(nthByPriority(TASKS, 1)).toEqual("Update deps");
});

test("with 2", () => {
  expect(nthByPriority(TASKS, 2)).toEqual("Deploy API");
});

test("with 5", () => {
  expect(nthByPriority(TASKS, 5)).toEqual("Refactor auth");
});

test("with 0", () => {
  expect(nthByPriority(TASKS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPriority(TASKS, 99)).toEqual(null);
});
