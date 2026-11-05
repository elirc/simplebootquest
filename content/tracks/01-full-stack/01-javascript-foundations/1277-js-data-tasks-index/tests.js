const TASKS = [
  {id: 1, title: "Fix login", estimate: 9, priority: 3, status: "todo", assignee: "linus", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Write tests", estimate: 10, priority: 3, status: "done", assignee: "ada", blocked: true},
  {id: 4, title: "Add search", estimate: 6, priority: 2, status: "todo", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 2, status: "doing", assignee: "linus", blocked: true},
  {id: 6, title: "Review PR", estimate: 7, priority: 2, status: "todo", assignee: "linus", blocked: false},
  {id: 7, title: "Add caching", estimate: 13, priority: 2, status: "done", assignee: "grace", blocked: false},
  {id: 8, title: "Design schema", estimate: 15, priority: 2, status: "done", assignee: "linus", blocked: true}
];

test("an empty list", () => {
  expect(tasksById([])).toEqual({});
});

test("all tasks", () => {
  expect(tasksById(TASKS)).toEqual({"1":"Fix login","2":"Refactor auth","3":"Write tests","4":"Add search","5":"Update deps","6":"Review PR","7":"Add caching","8":"Design schema"});
});
