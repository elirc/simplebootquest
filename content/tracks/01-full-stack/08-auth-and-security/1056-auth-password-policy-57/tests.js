test("case 1: aaaaaaaaaaaa", () => {
  expect(checkCarPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 2: xxxxxxxxxxxx…", () => {
  expect(checkCarPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 3: AdaLovelace1!", () => {
  expect(checkCarPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 4: password", () => {
  expect(checkCarPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkCarPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: lower123!", () => {
  expect(checkCarPassword("lower123!", "Ada")).toEqual(["too short"]);
});
