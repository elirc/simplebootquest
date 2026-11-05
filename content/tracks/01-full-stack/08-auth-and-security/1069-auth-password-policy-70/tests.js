test("case 1: aaaaaaaaaaaa", () => {
  expect(checkSongPassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short"]);
});

test("case 2: xxxxxxxxxxxx…", () => {
  expect(checkSongPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 3:  Spaces1! ", () => {
  expect(checkSongPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 4: ada", () => {
  expect(checkSongPassword("ada", "Ada")).toEqual(["too short"]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkSongPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 6: password", () => {
  expect(checkSongPassword("password", "Ada")).toEqual(["too short"]);
});
