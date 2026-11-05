test("case 1: Mixed Case 42", () => {
  expect(checkRepoPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 2: ada", () => {
  expect(checkRepoPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","contains your name"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkRepoPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkRepoPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 5: lower123!", () => {
  expect(checkRepoPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 6: password", () => {
  expect(checkRepoPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});
