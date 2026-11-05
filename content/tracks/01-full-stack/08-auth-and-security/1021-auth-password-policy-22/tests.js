test("case 1: password", () => {
  expect(checkEventPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 2: UPPER123!", () => {
  expect(checkEventPassword("UPPER123!", "Ada")).toEqual([]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkEventPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkEventPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 5: lower123!", () => {
  expect(checkEventPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkEventPassword("Mixed Case 42", "Ada")).toEqual([]);
});
