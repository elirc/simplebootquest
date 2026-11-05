test("case 1: aaaaaaaaaaaa", () => {
  expect(checkEventPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 2: UPPER123!", () => {
  expect(checkEventPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkEventPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: lower123!", () => {
  expect(checkEventPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 5: password", () => {
  expect(checkEventPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkEventPassword("Mixed Case 42", "Ada")).toEqual([]);
});
