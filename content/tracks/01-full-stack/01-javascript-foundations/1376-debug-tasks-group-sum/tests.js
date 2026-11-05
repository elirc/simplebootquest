const TASKS = [
  {id: 1, title: "Review PR", estimate: 14, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 2, title: "Update deps", estimate: 7, priority: 5, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 14, priority: 4, status: "done", assignee: "linus", blocked: false},
  {id: 4, title: "Fix login", estimate: 7, priority: 3, status: "todo", assignee: "ada", blocked: false},
  {id: 5, title: "Refactor auth", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 6, title: "Write tests", estimate: 9, priority: 4, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Write docs", estimate: 12, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Add caching", estimate: 8, priority: 4, status: "done", assignee: "grace", blocked: true}
];

test("an empty list", () => {
  expect(priorityPerAssignee([])).toEqual({});
});

test("all tasks", () => {
  expect(priorityPerAssignee(TASKS)).toEqual({"ada":18,"linus":5,"grace":4});
});
