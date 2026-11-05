test("case 1: UPPER123!", () => {
  expect(checkBookPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkBookPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 3: lower123!", () => {
  expect(checkBookPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkBookPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkBookPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: password", () => {
  expect(checkBookPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});
