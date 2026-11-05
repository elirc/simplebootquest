test("case 1:  Spaces1! ", () => {
  expect(checkSongPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: UPPER123!", () => {
  expect(checkSongPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkSongPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: lower123!", () => {
  expect(checkSongPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkSongPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkSongPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});
