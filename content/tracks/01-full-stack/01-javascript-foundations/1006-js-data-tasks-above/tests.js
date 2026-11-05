const TASKS = [
  {id: 1, title: "Add search", estimate: 13, priority: 4, status: "done", assignee: "ada", blocked: true},
  {id: 2, title: "Fix CSS", estimate: 8, priority: 2, status: "done", assignee: "ada", blocked: true},
  {id: 3, title: "Fix login", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Deploy API", estimate: 10, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 5, title: "Plan sprint", estimate: 16, priority: 3, status: "done", assignee: "grace", blocked: true},
  {id: 6, title: "Review PR", estimate: 1, priority: 5, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Write tests", estimate: 3, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 8, title: "Refactor auth", estimate: 2, priority: 3, status: "done", assignee: "grace", blocked: true}
];

test("with 3", () => {
  expect(tasksAbove(TASKS, 3)).toEqual(["Add search","Fix CSS","Fix login","Deploy API","Plan sprint"]);
});

test("with 9", () => {
  expect(tasksAbove(TASKS, 9)).toEqual(["Add search","Deploy API","Plan sprint"]);
});

test("with 999999", () => {
  expect(tasksAbove(TASKS, 999999)).toEqual([]);
});
