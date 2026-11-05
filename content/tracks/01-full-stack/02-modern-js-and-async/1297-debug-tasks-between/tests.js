const TASKS = [
  {id: 1, title: "Deploy API", estimate: 9, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 5, priority: 2, status: "done", assignee: "linus", blocked: false},
  {id: 3, title: "Design schema", estimate: 2, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 4, title: "Write tests", estimate: 11, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Write docs", estimate: 3, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Review PR", estimate: 15, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 7, title: "Add caching", estimate: 9, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 8, title: "Add search", estimate: 11, priority: 3, status: "done", assignee: "grace", blocked: false}
];

test("with 5, 9", () => {
  expect(tasksInRange(TASKS, 5, 9)).toEqual(["Deploy API","Fix login","Add caching"]);
});

test("with 9, 11", () => {
  expect(tasksInRange(TASKS, 9, 11)).toEqual(["Deploy API","Write tests","Add caching","Add search"]);
});

test("with 5, 5", () => {
  expect(tasksInRange(TASKS, 5, 5)).toEqual(["Fix login"]);
});
