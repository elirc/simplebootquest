test("with 1, 3", () => {
  expect(pageOfSongs(SONGS, 1, 3)).toEqual({"items":["Drift","Static","Lanterns"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfSongs(SONGS, 2, 3)).toEqual({"items":["Tides","Neon","Halo"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfSongs(SONGS, 3, 3)).toEqual({"items":["Echoes","Gravity"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfSongs(SONGS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
