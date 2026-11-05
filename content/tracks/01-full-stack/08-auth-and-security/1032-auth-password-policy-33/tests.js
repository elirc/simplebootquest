test("case 1: password", () => {
  expect(checkBookPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 2: lower123!", () => {
  expect(checkBookPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 3: AdaLovelace1!", () => {
  expect(checkBookPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 4: UPPER123!", () => {
  expect(checkBookPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkBookPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkBookPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});
