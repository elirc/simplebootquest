test("case 1: lower123!", () => {
  expect(checkCoursePassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 2: password", () => {
  expect(checkCoursePassword("password", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});

test("case 3: UPPER123!", () => {
  expect(checkCoursePassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 4: aaaaaaaaaaaa", () => {
  expect(checkCoursePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs a symbol"]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkCoursePassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkCoursePassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});
