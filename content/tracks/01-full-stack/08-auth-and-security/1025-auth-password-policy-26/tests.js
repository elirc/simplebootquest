test("case 1: UPPER123!", () => {
  expect(checkMoviePassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 2: password", () => {
  expect(checkMoviePassword("password", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkMoviePassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 4: xxxxxxxxxxxx…", () => {
  expect(checkMoviePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkMoviePassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkMoviePassword("Correct-Horse-9", "Ada")).toEqual([]);
});
