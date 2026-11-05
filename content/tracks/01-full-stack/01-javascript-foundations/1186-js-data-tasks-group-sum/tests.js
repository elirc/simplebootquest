const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 15, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 2, title: "Write docs", estimate: 8, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 3, title: "Refactor auth", estimate: 12, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Write tests", estimate: 14, priority: 3, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Add search", estimate: 14, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Fix login", estimate: 14, priority: 5, status: "doing", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 10, priority: 4, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Deploy API", estimate: 5, priority: 1, status: "todo", assignee: "ada", blocked: false}
];

test("an empty list", () => {
  expect(estimatePerAssignee([])).toEqual({});
});

test("all tasks", () => {
  expect(estimatePerAssignee(TASKS)).toEqual({"ada":20,"linus":34,"grace":38});
});
