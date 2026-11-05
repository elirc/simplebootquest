test("case 1: Tr0ub4dor&3", () => {
  expect(checkEmployeePassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkEmployeePassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkEmployeePassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 4: aaaaaaaaaaaa", () => {
  expect(checkEmployeePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkEmployeePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkEmployeePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual(["too long"]);
});
