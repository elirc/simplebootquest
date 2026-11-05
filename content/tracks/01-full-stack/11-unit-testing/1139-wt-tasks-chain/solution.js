test("with \"todo\"", () => {
  expect(tasksInStatusRanked(TASKS, "todo")).toEqual(["Fix login","Write tests","Deploy API"]);
});

test("with \"doing\"", () => {
  expect(tasksInStatusRanked(TASKS, "doing")).toEqual(["Update deps","Add caching","Refactor auth"]);
});

test("with \"done\"", () => {
  expect(tasksInStatusRanked(TASKS, "done")).toEqual(["Fix CSS","Add search"]);
});
