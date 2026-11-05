const TASKS = [
  {id: 1, title: "Review PR", estimate: 13, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Refactor auth", estimate: 11, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Write tests", estimate: 13, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 4, title: "Write docs", estimate: 13, priority: 4, status: "done", assignee: "grace", blocked: true},
  {id: 5, title: "Add caching", estimate: 7, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 6, title: "Add search", estimate: 5, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 7, title: "Design schema", estimate: 14, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 11, priority: 3, status: "doing", assignee: "ada", blocked: true}
];

test("with 11", () => {
  expect(allTasksUnder(TASKS, 11)).toEqual(false);
});

test("with 15", () => {
  expect(allTasksUnder(TASKS, 15)).toEqual(true);
});

test("with 14", () => {
  expect(allTasksUnder(TASKS, 14)).toEqual(false);
});
