test("case 1: P4ssw0rd!", () => {
  expect(checkOrderPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkOrderPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 3: ada", () => {
  expect(checkOrderPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkOrderPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: lower123!", () => {
  expect(checkOrderPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkOrderPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});
