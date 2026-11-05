test("case 1: ada", () => {
  expect(checkCityPassword("ada", "Ada")).toEqual(["too short","contains your name"]);
});

test("case 2: P4ssw0rd!", () => {
  expect(checkCityPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkCityPassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short"]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkCityPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkCityPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 6: lower123!", () => {
  expect(checkCityPassword("lower123!", "Ada")).toEqual(["too short"]);
});
