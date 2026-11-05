test("case 1: AdaLovelace1!", () => {
  expect(checkTransactionPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkTransactionPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkTransactionPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: password", () => {
  expect(checkTransactionPassword("password", "Ada")).toEqual(["too short"]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkTransactionPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkTransactionPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});
