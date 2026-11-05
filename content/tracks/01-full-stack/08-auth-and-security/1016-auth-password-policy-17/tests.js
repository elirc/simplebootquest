test("case 1: xxxxxxxxxxxx…", () => {
  expect(checkProductPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual(["too long"]);
});

test("case 2: UPPER123!", () => {
  expect(checkProductPassword("UPPER123!", "Ada")).toEqual([]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkProductPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 4: ada", () => {
  expect(checkProductPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter","contains your name"]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkProductPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkProductPassword(" Spaces1! ", "Ada")).toEqual([]);
});
