const TASKS = [
  {id: 1, title: "Write tests", estimate: 2, priority: 1, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Fix login", estimate: 9, priority: 5, status: "done", assignee: "ada", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 8, priority: 2, status: "done", assignee: "grace", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 5, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Design schema", estimate: 1, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 6, title: "Add search", estimate: 4, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 13, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Add caching", estimate: 14, priority: 3, status: "done", assignee: "linus", blocked: false}
];

test("with 4", () => {
  expect(allTasksUnder(TASKS, 4)).toEqual(false);
});

test("with 15", () => {
  expect(allTasksUnder(TASKS, 15)).toEqual(true);
});

test("with 14", () => {
  expect(allTasksUnder(TASKS, 14)).toEqual(false);
});
