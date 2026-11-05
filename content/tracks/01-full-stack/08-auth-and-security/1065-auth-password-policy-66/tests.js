test("case 1: Correct-Horse-9", () => {
  expect(checkSongPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkSongPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 3: UPPER123!", () => {
  expect(checkSongPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 4: password", () => {
  expect(checkSongPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 5: lower123!", () => {
  expect(checkSongPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 6: ada", () => {
  expect(checkSongPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});
