const TASKS = [
  {id: 1, title: "Design schema", estimate: 15, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Deploy API", estimate: 5, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Add search", estimate: 11, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 4, title: "Write docs", estimate: 13, priority: 3, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 6, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Review PR", estimate: 10, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix CSS", estimate: 16, priority: 4, status: "todo", assignee: "linus", blocked: true}
];

test("with 1, 3", () => {
  expect(pageOfTasks(TASKS, 1, 3)).toEqual({"items":["Design schema","Deploy API","Add search"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTasks(TASKS, 2, 3)).toEqual({"items":["Write docs","Refactor auth","Add caching"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTasks(TASKS, 3, 3)).toEqual({"items":["Review PR","Fix CSS"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTasks(TASKS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
