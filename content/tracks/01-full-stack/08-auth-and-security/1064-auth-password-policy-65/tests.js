test("case 1: P4ssw0rd!", () => {
  expect(checkCityPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkCityPassword(" Spaces1! ", "Ada")).toEqual(["has surrounding spaces"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkCityPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 4: xxxxxxxxxxxx…", () => {
  expect(checkCityPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkCityPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a symbol"]);
});

test("case 6: Tr0ub4dor&3", () => {
  expect(checkCityPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});
