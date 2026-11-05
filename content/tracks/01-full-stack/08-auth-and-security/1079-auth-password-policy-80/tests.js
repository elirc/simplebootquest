test("case 1: password", () => {
  expect(checkEmployeePassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 2: xxxxxxxxxxxx…", () => {
  expect(checkEmployeePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkEmployeePassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkEmployeePassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkEmployeePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: ada", () => {
  expect(checkEmployeePassword("ada", "Ada")).toEqual(["too short","needs a digit","contains your name"]);
});
