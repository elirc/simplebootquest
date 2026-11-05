const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 6, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 2, title: "Write tests", estimate: 5, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Plan sprint", estimate: 1, priority: 2, status: "todo", assignee: "grace", blocked: false},
  {id: 4, title: "Update deps", estimate: 9, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Review PR", estimate: 6, priority: 3, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Fix CSS", estimate: 8, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 7, title: "Add search", estimate: 11, priority: 5, status: "done", assignee: "ada", blocked: true},
  {id: 8, title: "Deploy API", estimate: 7, priority: 4, status: "done", assignee: "grace", blocked: false}
];

test("an empty list", () => {
  expect(highestPriority([])).toEqual(null);
});

test("all tasks", () => {
  expect(highestPriority(TASKS)).toEqual("Add search");
});
