test("case 1: UPPER123!", () => {
  expect(checkCoursePassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 2: lower123!", () => {
  expect(checkCoursePassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 3: password", () => {
  expect(checkCoursePassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkCoursePassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkCoursePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkCoursePassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs a symbol"]);
});
