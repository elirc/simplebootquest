const TASKS = [
  {id: 1, title: "Design schema", estimate: 15, priority: 4, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Deploy API", estimate: 7, priority: 2, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Plan sprint", estimate: 5, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 12, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Update deps", estimate: 12, priority: 1, status: "todo", assignee: "linus", blocked: true},
  {id: 8, title: "Review PR", estimate: 15, priority: 2, status: "doing", assignee: "grace", blocked: false}
];

test("an empty list", () => {
  expect(summariseTasks([])).toEqual([]);
});

test("all tasks", () => {
  expect(summariseTasks(TASKS)).toEqual([{"id":1,"title":"Design schema","estimate":15},{"id":2,"title":"Deploy API","estimate":7},{"id":3,"title":"Refactor auth","estimate":15},{"id":4,"title":"Add caching","estimate":9},{"id":5,"title":"Plan sprint","estimate":5},{"id":6,"title":"Fix login","estimate":12},{"id":7,"title":"Update deps","estimate":12},{"id":8,"title":"Review PR","estimate":15}]);
});
