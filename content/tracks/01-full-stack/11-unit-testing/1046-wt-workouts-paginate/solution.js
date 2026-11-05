test("with 1, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 1, 3)).toEqual({"items":["Tue run","Wed lift","Fri run"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 2, 3)).toEqual({"items":["Mon run","Sat ride","Tue swim"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 3, 3)).toEqual({"items":["Mon lift","Wed swim"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
