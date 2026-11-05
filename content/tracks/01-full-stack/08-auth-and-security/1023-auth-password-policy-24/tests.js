test("case 1: lower123!", () => {
  expect(checkMoviePassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkMoviePassword(" Spaces1! ", "Ada")).toEqual(["has surrounding spaces"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkMoviePassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkMoviePassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkMoviePassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkMoviePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});
