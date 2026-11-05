test("case 1: AdaLovelace1!", () => {
  expect(checkTaskPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 2: password", () => {
  expect(checkTaskPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkTaskPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkTaskPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkTaskPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 6: UPPER123!", () => {
  expect(checkTaskPassword("UPPER123!", "Ada")).toEqual([]);
});
