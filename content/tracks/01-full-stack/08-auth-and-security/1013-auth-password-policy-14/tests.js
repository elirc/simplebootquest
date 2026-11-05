test("case 1: UPPER123!", () => {
  expect(checkTransactionPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkTransactionPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkTransactionPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkTransactionPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 5: AdaLovelace1!", () => {
  expect(checkTransactionPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 6: password", () => {
  expect(checkTransactionPassword("password", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});
