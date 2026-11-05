test("case 1: lower123!", () => {
  expect(checkPlantPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 2: UPPER123!", () => {
  expect(checkPlantPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 3: password", () => {
  expect(checkPlantPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 4: Correct-Horse-9", () => {
  expect(checkPlantPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkPlantPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 6: Tr0ub4dor&3", () => {
  expect(checkPlantPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});
