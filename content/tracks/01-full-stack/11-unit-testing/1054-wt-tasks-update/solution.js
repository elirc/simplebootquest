test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  bumpPriority(TASKS, "todo", 10);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("with \"todo\", 10", () => {
  expect(bumpPriority(TASKS, "todo", 10)).toEqual([{"id":1,"title":"Fix CSS","estimate":8,"priority":14,"status":"todo","assignee":"ada","blocked":false},{"id":2,"title":"Write docs","estimate":6,"priority":12,"status":"todo","assignee":"grace","blocked":false},{"id":3,"title":"Add caching","estimate":14,"priority":3,"status":"doing","assignee":"grace","blocked":false},{"id":4,"title":"Design schema","estimate":7,"priority":3,"status":"done","assignee":"grace","blocked":false},{"id":5,"title":"Review PR","estimate":8,"priority":11,"status":"todo","assignee":"linus","blocked":false},{"id":6,"title":"Deploy API","estimate":4,"priority":13,"status":"todo","assignee":"ada","blocked":false},{"id":7,"title":"Add search","estimate":15,"priority":1,"status":"done","assignee":"ada","blocked":true},{"id":8,"title":"Plan sprint","estimate":5,"priority":5,"status":"done","assignee":"ada","blocked":true}]);
});

test("with \"doing\", 1", () => {
  expect(bumpPriority(TASKS, "doing", 1)).toEqual([{"id":1,"title":"Fix CSS","estimate":8,"priority":4,"status":"todo","assignee":"ada","blocked":false},{"id":2,"title":"Write docs","estimate":6,"priority":2,"status":"todo","assignee":"grace","blocked":false},{"id":3,"title":"Add caching","estimate":14,"priority":4,"status":"doing","assignee":"grace","blocked":false},{"id":4,"title":"Design schema","estimate":7,"priority":3,"status":"done","assignee":"grace","blocked":false},{"id":5,"title":"Review PR","estimate":8,"priority":1,"status":"todo","assignee":"linus","blocked":false},{"id":6,"title":"Deploy API","estimate":4,"priority":3,"status":"todo","assignee":"ada","blocked":false},{"id":7,"title":"Add search","estimate":15,"priority":1,"status":"done","assignee":"ada","blocked":true},{"id":8,"title":"Plan sprint","estimate":5,"priority":5,"status":"done","assignee":"ada","blocked":true}]);
});
