test("case 1: password", () => {
  expect(checkRepoPassword("password", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkRepoPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 3: ada", () => {
  expect(checkRepoPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});

test("case 4: aaaaaaaaaaaa", () => {
  expect(checkRepoPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs a symbol"]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkRepoPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 6: lower123!", () => {
  expect(checkRepoPassword("lower123!", "Ada")).toEqual(["too short"]);
});
