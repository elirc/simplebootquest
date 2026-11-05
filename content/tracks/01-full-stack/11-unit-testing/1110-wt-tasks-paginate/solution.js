test("with 1, 3", () => {
  expect(pageOfTasks(TASKS, 1, 3)).toEqual({"items":["Review PR","Add caching","Fix CSS"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTasks(TASKS, 2, 3)).toEqual({"items":["Plan sprint","Deploy API","Update deps"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTasks(TASKS, 3, 3)).toEqual({"items":["Add search","Design schema"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTasks(TASKS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
