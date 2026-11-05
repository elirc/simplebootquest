test("case 1: Mixed Case 42", () => {
  expect(checkTaskPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 2: lower123!", () => {
  expect(checkTaskPassword("lower123!", "Ada")).toEqual([]);
});

test("case 3: password", () => {
  expect(checkTaskPassword("password", "Ada")).toEqual(["needs a digit"]);
});

test("case 4: xxxxxxxxxxxx…", () => {
  expect(checkTaskPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkTaskPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 6: ada", () => {
  expect(checkTaskPassword("ada", "Ada")).toEqual(["too short","needs a digit","contains your name"]);
});
