const TASKS = [
  {id: 1, title: "Write tests", estimate: 16, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Plan sprint", estimate: 10, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 3, title: "Write docs", estimate: 14, priority: 5, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 13, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 5, title: "Refactor auth", estimate: 10, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Deploy API", estimate: 11, priority: 2, status: "todo", assignee: "ada", blocked: true},
  {id: 7, title: "Add search", estimate: 11, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix login", estimate: 14, priority: 1, status: "done", assignee: "linus", blocked: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  tasksByEstimate(TASKS);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("all tasks", () => {
  expect(tasksByEstimate(TASKS)).toEqual(["Plan sprint","Refactor auth","Deploy API","Add search","Add caching","Write docs","Fix login","Write tests"]);
});
