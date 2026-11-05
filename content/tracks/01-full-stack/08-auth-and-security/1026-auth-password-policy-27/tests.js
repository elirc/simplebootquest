test("case 1:  Spaces1! ", () => {
  expect(checkProductPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: Mixed Case 42", () => {
  expect(checkProductPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkProductPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: lower123!", () => {
  expect(checkProductPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkProductPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: UPPER123!", () => {
  expect(checkProductPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});
