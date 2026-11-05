test("case 1: Correct-Horse-9", () => {
  expect(checkOrderPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkOrderPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkOrderPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkOrderPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkOrderPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 6: UPPER123!", () => {
  expect(checkOrderPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});
