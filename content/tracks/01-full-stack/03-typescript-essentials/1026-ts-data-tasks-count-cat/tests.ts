const TASKS = [
  {id: 1, title: "Write tests", estimate: 15, priority: 5, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Fix login", estimate: 7, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Update deps", estimate: 15, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 12, priority: 1, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Deploy API", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Design schema", estimate: 14, priority: 1, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Fix CSS", estimate: 6, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Refactor auth", estimate: 9, priority: 5, status: "doing", assignee: "ada", blocked: true}
];

test("with \"ada\"", () => {
  expect(countTasksByAssignee(TASKS, "ada")).toEqual(3);
});

test("with \"grace\"", () => {
  expect(countTasksByAssignee(TASKS, "grace")).toEqual(3);
});

test("with \"linus\"", () => {
  expect(countTasksByAssignee(TASKS, "linus")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countTasksByAssignee(TASKS, "nope")).toEqual(0);
});
