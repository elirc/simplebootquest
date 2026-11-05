const TASKS = [
  {id: 1, title: "Fix CSS", estimate: 1, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 2, title: "Update deps", estimate: 3, priority: 4, status: "doing", assignee: "grace", blocked: true},
  {id: 3, title: "Fix login", estimate: 14, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 4, title: "Add caching", estimate: 16, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 5, title: "Write docs", estimate: 6, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 6, title: "Review PR", estimate: 7, priority: 3, status: "done", assignee: "grace", blocked: false},
  {id: 7, title: "Write tests", estimate: 13, priority: 3, status: "done", assignee: "linus", blocked: true},
  {id: 8, title: "Plan sprint", estimate: 8, priority: 2, status: "todo", assignee: "ada", blocked: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  topTasksByEstimate(TASKS, 1);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("with 1", () => {
  expect(topTasksByEstimate(TASKS, 1)).toEqual(["Add caching"]);
});

test("with 3", () => {
  expect(topTasksByEstimate(TASKS, 3)).toEqual(["Add caching","Fix login","Write tests"]);
});

test("with 0", () => {
  expect(topTasksByEstimate(TASKS, 0)).toEqual([]);
});
