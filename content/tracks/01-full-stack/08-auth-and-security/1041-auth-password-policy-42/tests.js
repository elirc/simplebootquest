test("case 1: UPPER123!", () => {
  expect(checkCarPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkCarPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 3: password", () => {
  expect(checkCarPassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 4: lower123!", () => {
  expect(checkCarPassword("lower123!", "Ada")).toEqual([]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkCarPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkCarPassword(" Spaces1! ", "Ada")).toEqual([]);
});
