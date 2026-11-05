test("case 1: password", () => {
  expect(checkCoursePassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkCoursePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: AdaLovelace1!", () => {
  expect(checkCoursePassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkCoursePassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkCoursePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkCoursePassword("Mixed Case 42", "Ada")).toEqual([]);
});
