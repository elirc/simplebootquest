const TASKS = [
  {id: 1, title: "Add caching", estimate: 11, priority: 2, status: "done", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 14, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 4, priority: 1, status: "doing", assignee: "grace", blocked: true},
  {id: 4, title: "Deploy API", estimate: 10, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Fix CSS", estimate: 10, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Fix login", estimate: 4, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 7, title: "Write tests", estimate: 13, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Review PR", estimate: 14, priority: 4, status: "todo", assignee: "grace", blocked: true}
];

test("with \"Fix login\"", () => {
  expect(priorityOf(TASKS, "Fix login")).toEqual(3);
});

test("with \"Nope\"", () => {
  expect(priorityOf(TASKS, "Nope")).toEqual(null);
});
