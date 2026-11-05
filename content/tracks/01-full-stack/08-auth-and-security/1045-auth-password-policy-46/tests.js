test("case 1:  Spaces1! ", () => {
  expect(checkRepoPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: P4ssw0rd!", () => {
  expect(checkRepoPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkRepoPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkRepoPassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkRepoPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkRepoPassword("Mixed Case 42", "Ada")).toEqual(["too short"]);
});
