test("case 1: ada", () => {
  expect(checkTransactionPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","contains your name"]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkTransactionPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkTransactionPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkTransactionPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkTransactionPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 6: lower123!", () => {
  expect(checkTransactionPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});
