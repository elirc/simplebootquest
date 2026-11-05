test("case 1: password", () => {
  expect(checkCityPassword("password", "Ada")).toEqual(["needs a symbol"]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkCityPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkCityPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 4: AdaLovelace1!", () => {
  expect(checkCityPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkCityPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 6: lower123!", () => {
  expect(checkCityPassword("lower123!", "Ada")).toEqual([]);
});
