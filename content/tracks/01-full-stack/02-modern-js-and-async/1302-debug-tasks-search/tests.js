const TASKS = [
  {id: 1, title: "Fix login", estimate: 6, priority: 4, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 16, priority: 4, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Add search", estimate: 5, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 15, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Update deps", estimate: 3, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Write docs", estimate: 7, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Review PR", estimate: 14, priority: 1, status: "todo", assignee: "grace", blocked: false},
  {id: 8, title: "Deploy API", estimate: 8, priority: 5, status: "todo", assignee: "ada", blocked: false}
];

test("with \"ev\"", () => {
  expect(searchTasks(TASKS, "ev")).toEqual(["Review PR"]);
});

test("with \"EV\"", () => {
  expect(searchTasks(TASKS, "EV")).toEqual(["Review PR"]);
});

test("with \"  \"", () => {
  expect(searchTasks(TASKS, "  ")).toEqual(["Fix login","Plan sprint","Add search","Fix CSS","Update deps","Write docs","Review PR","Deploy API"]);
});

test("with \"zzz\"", () => {
  expect(searchTasks(TASKS, "zzz")).toEqual([]);
});
