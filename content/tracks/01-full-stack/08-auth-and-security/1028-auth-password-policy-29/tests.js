test("case 1: Tr0ub4dor&3", () => {
  expect(checkCityPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkCityPassword("aaaaaaaaaaaa", "Ada")).toEqual([]);
});

test("case 3: UPPER123!", () => {
  expect(checkCityPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 4: lower123!", () => {
  expect(checkCityPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkCityPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkCityPassword("Mixed Case 42", "Ada")).toEqual([]);
});
