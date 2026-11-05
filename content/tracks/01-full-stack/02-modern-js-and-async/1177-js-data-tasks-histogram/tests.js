const TASKS = [
  {id: 1, title: "Write tests", estimate: 9, priority: 1, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Fix login", estimate: 6, priority: 4, status: "todo", assignee: "ada", blocked: false},
  {id: 3, title: "Fix CSS", estimate: 2, priority: 1, status: "doing", assignee: "grace", blocked: false},
  {id: 4, title: "Refactor auth", estimate: 13, priority: 4, status: "done", assignee: "ada", blocked: false},
  {id: 5, title: "Review PR", estimate: 6, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 6, title: "Add caching", estimate: 3, priority: 4, status: "todo", assignee: "grace", blocked: true},
  {id: 7, title: "Update deps", estimate: 2, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 8, title: "Add search", estimate: 13, priority: 3, status: "doing", assignee: "linus", blocked: true}
];

test("with 1", () => {
  expect(priorityHistogram(TASKS, 1)).toEqual({"1":2,"2":2,"3":1,"4":3});
});

test("with 2", () => {
  expect(priorityHistogram(TASKS, 2)).toEqual({"0":2,"2":3,"4":3});
});
