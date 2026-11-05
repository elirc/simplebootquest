test("case 1: AdaLovelace1!", () => {
  expect(checkEventPassword("AdaLovelace1!", "Ada")).toEqual(["too short"]);
});

test("case 2: password", () => {
  expect(checkEventPassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter","needs a symbol"]);
});

test("case 3: lower123!", () => {
  expect(checkEventPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 4: Correct-Horse-9", () => {
  expect(checkEventPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkEventPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkEventPassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter","needs a symbol"]);
});
