const TASKS = [
  {id: 1, title: "Fix login", estimate: 4, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Plan sprint", estimate: 10, priority: 2, status: "done", assignee: "grace", blocked: true},
  {id: 3, title: "Add search", estimate: 4, priority: 1, status: "done", assignee: "linus", blocked: true},
  {id: 4, title: "Review PR", estimate: 12, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 5, title: "Deploy API", estimate: 9, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 6, title: "Refactor auth", estimate: 10, priority: 5, status: "done", assignee: "linus", blocked: false},
  {id: 7, title: "Fix CSS", estimate: 10, priority: 3, status: "todo", assignee: "grace", blocked: true},
  {id: 8, title: "Write tests", estimate: 3, priority: 1, status: "done", assignee: "linus", blocked: false}
];

test("with \"ev\"", () => {
  expect(searchTasks(TASKS, "ev")).toEqual(["Review PR"]);
});

test("with \"EV\"", () => {
  expect(searchTasks(TASKS, "EV")).toEqual(["Review PR"]);
});

test("with \"  \"", () => {
  expect(searchTasks(TASKS, "  ")).toEqual(["Fix login","Plan sprint","Add search","Review PR","Deploy API","Refactor auth","Fix CSS","Write tests"]);
});

test("with \"zzz\"", () => {
  expect(searchTasks(TASKS, "zzz")).toEqual([]);
});
