test("case 1:  Spaces1! ", () => {
  expect(checkMoviePassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkMoviePassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkMoviePassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 4: UPPER123!", () => {
  expect(checkMoviePassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkMoviePassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 6: ada", () => {
  expect(checkMoviePassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});
