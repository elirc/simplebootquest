test("case 1: aaaaaaaaaaaa", () => {
  expect(checkWorkoutPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 2: ada", () => {
  expect(checkWorkoutPassword("ada", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkWorkoutPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkWorkoutPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkWorkoutPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkWorkoutPassword("Mixed Case 42", "Ada")).toEqual([]);
});
