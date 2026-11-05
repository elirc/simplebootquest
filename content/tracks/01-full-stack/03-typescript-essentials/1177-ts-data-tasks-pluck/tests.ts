const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 10, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Add search", estimate: 12, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 16, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 5, title: "Design schema", estimate: 1, priority: 1, status: "done", assignee: "linus", blocked: false},
  {id: 6, title: "Write tests", estimate: 3, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 7, title: "Review PR", estimate: 9, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Update deps", estimate: 3, priority: 1, status: "done", assignee: "grace", blocked: true}
];

test("an empty list", () => {
  expect(summariseTasks([])).toEqual([]);
});

test("all tasks", () => {
  expect(summariseTasks(TASKS)).toEqual([{"id":1,"title":"Refactor auth","estimate":12},{"id":2,"title":"Fix login","estimate":10},{"id":3,"title":"Add search","estimate":12},{"id":4,"title":"Fix CSS","estimate":16},{"id":5,"title":"Design schema","estimate":1},{"id":6,"title":"Write tests","estimate":3},{"id":7,"title":"Review PR","estimate":9},{"id":8,"title":"Update deps","estimate":3}]);
});
