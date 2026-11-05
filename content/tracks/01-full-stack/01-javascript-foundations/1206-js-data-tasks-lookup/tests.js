const TASKS = [
  {id: 1, title: "Review PR", estimate: 10, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Write tests", estimate: 10, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Plan sprint", estimate: 6, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Refactor auth", estimate: 5, priority: 3, status: "done", assignee: "grace", blocked: true},
  {id: 5, title: "Write docs", estimate: 6, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 6, title: "Fix login", estimate: 13, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 7, title: "Deploy API", estimate: 16, priority: 3, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Design schema", estimate: 6, priority: 2, status: "todo", assignee: "ada", blocked: true}
];

test("with \"Plan sprint\"", () => {
  expect(estimateOf(TASKS, "Plan sprint")).toEqual(6);
});

test("with \"Nope\"", () => {
  expect(estimateOf(TASKS, "Nope")).toEqual(null);
});
