test("case 1: xxxxxxxxxxxx…", () => {
  expect(checkMoviePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 2: P4ssw0rd!", () => {
  expect(checkMoviePassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkMoviePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs a symbol"]);
});

test("case 4: lower123!", () => {
  expect(checkMoviePassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 5: ada", () => {
  expect(checkMoviePassword("ada", "Ada")).toEqual(["too short","needs a digit","needs a symbol","contains your name"]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkMoviePassword("Correct-Horse-9", "Ada")).toEqual([]);
});
