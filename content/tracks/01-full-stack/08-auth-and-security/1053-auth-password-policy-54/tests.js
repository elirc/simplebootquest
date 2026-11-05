test("case 1: password", () => {
  expect(checkRepoPassword("password", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkRepoPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkRepoPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkRepoPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkRepoPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 6: lower123!", () => {
  expect(checkRepoPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});
