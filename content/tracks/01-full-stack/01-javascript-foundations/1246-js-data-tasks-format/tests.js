const TASKS = [
  {id: 1, title: "Update deps", estimate: 12, priority: 5, status: "done", assignee: "linus", blocked: true},
  {id: 2, title: "Deploy API", estimate: 13, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 12, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Write tests", estimate: 14, priority: 3, status: "todo", assignee: "grace", blocked: false},
  {id: 5, title: "Plan sprint", estimate: 3, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 6, title: "Write docs", estimate: 4, priority: 2, status: "done", assignee: "linus", blocked: true},
  {id: 7, title: "Design schema", estimate: 16, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 8, title: "Add caching", estimate: 15, priority: 3, status: "doing", assignee: "linus", blocked: true}
];

test("an empty list", () => {
  expect(describeTasks([])).toEqual([]);
});

test("all tasks", () => {
  expect(describeTasks(TASKS)).toEqual(["Update deps (5)","Deploy API (4)","Fix CSS (2)","Write tests (3)","Plan sprint (4)","Write docs (2)","Design schema (3)","Add caching (3)"]);
});
