const BEFORE = [
  {id: 1, title: "Update deps", estimate: 15, priority: 2, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Deploy API", estimate: 3, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Fix login", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Add search", estimate: 16, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Write tests", estimate: 2, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 15, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Refactor auth", estimate: 2, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Write docs", estimate: 13, priority: 3, status: "done", assignee: "ada", blocked: true}
];
const AFTER = [
  {id: 1, title: "Update deps", estimate: 15, priority: 2, status: "doing", assignee: "grace", blocked: true},
  {id: 2, title: "Deploy API", estimate: 10, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 3, title: "Fix login", estimate: 9, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 4, title: "Add search", estimate: 16, priority: 3, status: "todo", assignee: "linus", blocked: true},
  {id: 5, title: "Write tests", estimate: 9, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 6, title: "Fix CSS", estimate: 15, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Refactor auth", estimate: 2, priority: 5, status: "todo", assignee: "ada", blocked: true},
  {id: 8, title: "Write docs", estimate: 20, priority: 3, status: "done", assignee: "ada", blocked: true}
];

test("finds changed ids", () => {
  expect(estimateChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(estimateChanges(BEFORE, BEFORE)).toEqual([]);
});
