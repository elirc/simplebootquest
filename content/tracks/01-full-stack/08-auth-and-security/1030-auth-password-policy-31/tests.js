test("case 1: xxxxxxxxxxxx…", () => {
  expect(checkMoviePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkMoviePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkMoviePassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 4: ada", () => {
  expect(checkMoviePassword("ada", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 5: password", () => {
  expect(checkMoviePassword("password", "Ada")).toEqual(["needs a digit"]);
});

test("case 6: lower123!", () => {
  expect(checkMoviePassword("lower123!", "Ada")).toEqual([]);
});
