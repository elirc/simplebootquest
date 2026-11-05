test("case 1: Correct-Horse-9", () => {
  expect(checkRepoPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkRepoPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a symbol"]);
});

test("case 3: ada", () => {
  expect(checkRepoPassword("ada", "Ada")).toEqual(["too short","needs a symbol","contains your name"]);
});

test("case 4: password", () => {
  expect(checkRepoPassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkRepoPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 6: UPPER123!", () => {
  expect(checkRepoPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});
