test("case 1: P4ssw0rd!", () => {
  expect(checkRepoPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2: UPPER123!", () => {
  expect(checkRepoPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkRepoPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkRepoPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkRepoPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkRepoPassword("Correct-Horse-9", "Ada")).toEqual([]);
});
