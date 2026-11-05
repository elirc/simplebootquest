test("case 1: Tr0ub4dor&3", () => {
  expect(checkWorkoutPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 2: Mixed Case 42", () => {
  expect(checkWorkoutPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 3:  Spaces1! ", () => {
  expect(checkWorkoutPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 4: UPPER123!", () => {
  expect(checkWorkoutPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkWorkoutPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: AdaLovelace1!", () => {
  expect(checkWorkoutPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});
