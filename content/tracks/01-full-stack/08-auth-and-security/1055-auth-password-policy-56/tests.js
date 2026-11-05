test("case 1: AdaLovelace1!", () => {
  expect(checkOrderPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkOrderPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 3: password", () => {
  expect(checkOrderPassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkOrderPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkOrderPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkOrderPassword("Correct-Horse-9", "Ada")).toEqual([]);
});
