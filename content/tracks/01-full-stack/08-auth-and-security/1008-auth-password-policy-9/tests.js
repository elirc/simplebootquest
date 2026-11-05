test("case 1: xxxxxxxxxxxx…", () => {
  expect(checkRecipePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 2: ada", () => {
  expect(checkRecipePassword("ada", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 3: lower123!", () => {
  expect(checkRecipePassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 4: aaaaaaaaaaaa", () => {
  expect(checkRecipePassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 5: AdaLovelace1!", () => {
  expect(checkRecipePassword("AdaLovelace1!", "Ada")).toEqual(["too short"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkRecipePassword("Mixed Case 42", "Ada")).toEqual(["too short","needs a symbol"]);
});
