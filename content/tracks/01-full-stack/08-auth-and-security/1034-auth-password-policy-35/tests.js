test("case 1: lower123!", () => {
  expect(checkBookPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkBookPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 3: password", () => {
  expect(checkBookPassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 4: P4ssw0rd!", () => {
  expect(checkBookPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkBookPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkBookPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});
