const TASKS = [
  {id: 1, title: "Refactor auth", estimate: 11, priority: 4, status: "doing", assignee: "ada", blocked: false},
  {id: 2, title: "Fix CSS", estimate: 11, priority: 5, status: "doing", assignee: "linus", blocked: false},
  {id: 3, title: "Add caching", estimate: 13, priority: 1, status: "doing", assignee: "linus", blocked: false},
  {id: 4, title: "Design schema", estimate: 14, priority: 1, status: "doing", assignee: "ada", blocked: true},
  {id: 5, title: "Write docs", estimate: 8, priority: 2, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Add search", estimate: 4, priority: 4, status: "doing", assignee: "linus", blocked: false},
  {id: 7, title: "Review PR", estimate: 4, priority: 4, status: "doing", assignee: "ada", blocked: true},
  {id: 8, title: "Fix login", estimate: 6, priority: 3, status: "doing", assignee: "grace", blocked: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  topTasksByPriority(TASKS, 1);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("with 1", () => {
  expect(topTasksByPriority(TASKS, 1)).toEqual(["Fix CSS"]);
});

test("with 3", () => {
  expect(topTasksByPriority(TASKS, 3)).toEqual(["Fix CSS","Refactor auth","Add search"]);
});

test("with 0", () => {
  expect(topTasksByPriority(TASKS, 0)).toEqual([]);
});
