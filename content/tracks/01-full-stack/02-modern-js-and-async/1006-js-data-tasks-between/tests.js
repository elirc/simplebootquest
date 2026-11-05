const TASKS = [
  {id: 1, title: "Add caching", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Add search", estimate: 9, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Design schema", estimate: 13, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Deploy API", estimate: 5, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Write docs", estimate: 14, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 16, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 7, title: "Fix login", estimate: 10, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Write tests", estimate: 9, priority: 1, status: "done", assignee: "grace", blocked: false}
];

test("with 2, 2", () => {
  expect(tasksInRange(TASKS, 2, 2)).toEqual(["Add caching","Write docs","Refactor auth"]);
});

test("with 2, 4", () => {
  expect(tasksInRange(TASKS, 2, 4)).toEqual(["Add caching","Add search","Design schema","Write docs","Refactor auth","Fix login"]);
});

test("with 2, 2", () => {
  expect(tasksInRange(TASKS, 2, 2)).toEqual(["Add caching","Write docs","Refactor auth"]);
});
