const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 13, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Write docs", estimate: 14, priority: 3, status: "done", assignee: "ada", blocked: false},
  {id: 3, title: "Review PR", estimate: 4, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 4, title: "Deploy API", estimate: 7, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Update deps", estimate: 13, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 1, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 7, title: "Add search", estimate: 11, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 8, title: "Fix login", estimate: 13, priority: 4, status: "doing", assignee: "grace", blocked: false}
];

test("an empty list", () => {
  expect(splitTasksByBlocked([])).toEqual({"yes":[],"no":[]});
});

test("all tasks", () => {
  expect(splitTasksByBlocked(TASKS)).toEqual({"yes":["Review PR","Deploy API"],"no":["Refactor auth","Write docs","Update deps","Fix CSS","Add search","Fix login"]});
});
