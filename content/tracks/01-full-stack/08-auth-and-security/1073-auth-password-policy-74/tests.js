test("case 1:  Spaces1! ", () => {
  expect(checkTransactionPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 2: Mixed Case 42", () => {
  expect(checkTransactionPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkTransactionPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 4: ada", () => {
  expect(checkTransactionPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","contains your name"]);
});

test("case 5: UPPER123!", () => {
  expect(checkTransactionPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkTransactionPassword("Correct-Horse-9", "Ada")).toEqual([]);
});
