test("case 1: Mixed Case 42", () => {
  expect(checkTaskPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkTaskPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3:  Spaces1! ", () => {
  expect(checkTaskPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkTaskPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: ada", () => {
  expect(checkTaskPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 6: lower123!", () => {
  expect(checkTaskPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});
