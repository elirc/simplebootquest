const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 5, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Add caching", estimate: 9, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 3, title: "Refactor auth", estimate: 3, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 4, title: "Review PR", estimate: 7, priority: 2, status: "done", assignee: "ada", blocked: false},
  {id: 5, title: "Write tests", estimate: 6, priority: 1, status: "todo", assignee: "ada", blocked: true},
  {id: 6, title: "Write docs", estimate: 13, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 9, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 7, priority: 5, status: "todo", assignee: "grace", blocked: true}
];

test("an empty list", () => {
  expect(countTasksPerAssignee([])).toEqual({});
});

test("all tasks", () => {
  expect(countTasksPerAssignee(TASKS)).toEqual({"grace":2,"ada":6});
});
