test("case 1: Correct-Horse-9", () => {
  expect(checkTransactionPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: UPPER123!", () => {
  expect(checkTransactionPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkTransactionPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkTransactionPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkTransactionPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkTransactionPassword(" Spaces1! ", "Ada")).toEqual([]);
});
