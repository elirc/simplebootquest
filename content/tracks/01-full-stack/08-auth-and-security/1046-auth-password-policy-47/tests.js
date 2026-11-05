test("case 1: password", () => {
  expect(checkBookPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 2: xxxxxxxxxxxx…", () => {
  expect(checkBookPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual(["too long"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkBookPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 4: AdaLovelace1!", () => {
  expect(checkBookPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 5: UPPER123!", () => {
  expect(checkBookPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 6: ada", () => {
  expect(checkBookPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});
