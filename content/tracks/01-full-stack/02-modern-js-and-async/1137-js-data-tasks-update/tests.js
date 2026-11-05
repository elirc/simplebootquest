const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 8, priority: 4, status: "todo", assignee: "ada", blocked: true},
  {id: 2, title: "Deploy API", estimate: 5, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 13, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Review PR", estimate: 15, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Add search", estimate: 4, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 6, title: "Add caching", estimate: 15, priority: 5, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Update deps", estimate: 12, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 8, title: "Design schema", estimate: 12, priority: 4, status: "doing", assignee: "ada", blocked: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  bumpPriority(TASKS, "ada", 10);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("with \"ada\", 10", () => {
  expect(bumpPriority(TASKS, "ada", 10)).toEqual([{"id":1,"title":"Plan sprint","estimate":8,"priority":14,"status":"todo","assignee":"ada","blocked":true},{"id":2,"title":"Deploy API","estimate":5,"priority":13,"status":"doing","assignee":"ada","blocked":false},{"id":3,"title":"Fix CSS","estimate":13,"priority":11,"status":"done","assignee":"ada","blocked":true},{"id":4,"title":"Review PR","estimate":15,"priority":14,"status":"doing","assignee":"ada","blocked":true},{"id":5,"title":"Add search","estimate":4,"priority":12,"status":"doing","assignee":"ada","blocked":true},{"id":6,"title":"Add caching","estimate":15,"priority":15,"status":"doing","assignee":"ada","blocked":true},{"id":7,"title":"Update deps","estimate":12,"priority":4,"status":"doing","assignee":"grace","blocked":true},{"id":8,"title":"Design schema","estimate":12,"priority":14,"status":"doing","assignee":"ada","blocked":true}]);
});

test("with \"grace\", 1", () => {
  expect(bumpPriority(TASKS, "grace", 1)).toEqual([{"id":1,"title":"Plan sprint","estimate":8,"priority":4,"status":"todo","assignee":"ada","blocked":true},{"id":2,"title":"Deploy API","estimate":5,"priority":3,"status":"doing","assignee":"ada","blocked":false},{"id":3,"title":"Fix CSS","estimate":13,"priority":1,"status":"done","assignee":"ada","blocked":true},{"id":4,"title":"Review PR","estimate":15,"priority":4,"status":"doing","assignee":"ada","blocked":true},{"id":5,"title":"Add search","estimate":4,"priority":2,"status":"doing","assignee":"ada","blocked":true},{"id":6,"title":"Add caching","estimate":15,"priority":5,"status":"doing","assignee":"ada","blocked":true},{"id":7,"title":"Update deps","estimate":12,"priority":5,"status":"doing","assignee":"grace","blocked":true},{"id":8,"title":"Design schema","estimate":12,"priority":4,"status":"doing","assignee":"ada","blocked":true}]);
});
