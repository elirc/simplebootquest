const TASKS = [
  {id: 1, title: "Design schema", estimate: 12, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Update deps", estimate: 7, priority: 1, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Add caching", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Deploy API", estimate: 8, priority: 1, status: "done", assignee: "ada", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 5, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 11, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 7, title: "Fix login", estimate: 14, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 8, title: "Plan sprint", estimate: 13, priority: 3, status: "doing", assignee: "linus", blocked: true}
];

test("with \"ada\"", () => {
  expect(tasksInAssigneeRanked(TASKS, "ada")).toEqual(["Design schema","Fix CSS","Deploy API","Update deps","Refactor auth"]);
});

test("with \"grace\"", () => {
  expect(tasksInAssigneeRanked(TASKS, "grace")).toEqual(["Fix login","Add caching"]);
});

test("with \"linus\"", () => {
  expect(tasksInAssigneeRanked(TASKS, "linus")).toEqual(["Plan sprint"]);
});
