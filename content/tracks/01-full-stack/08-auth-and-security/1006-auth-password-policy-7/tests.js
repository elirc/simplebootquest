test("case 1: Tr0ub4dor&3", () => {
  expect(checkRecipePassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkRecipePassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});

test("case 3: Correct-Horse-9", () => {
  expect(checkRecipePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkRecipePassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 5: UPPER123!", () => {
  expect(checkRecipePassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 6: password", () => {
  expect(checkRecipePassword("password", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});
