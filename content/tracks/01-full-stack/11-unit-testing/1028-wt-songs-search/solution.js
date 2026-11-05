test("with \"ap\"", () => {
  expect(searchSongs(SONGS, "ap")).toEqual(["Paper Planes"]);
});

test("with \"AP\"", () => {
  expect(searchSongs(SONGS, "AP")).toEqual(["Paper Planes"]);
});

test("with \"  \"", () => {
  expect(searchSongs(SONGS, "  ")).toEqual(["Static","Echoes","Lanterns","Gravity","Neon","Tides","Velvet","Paper Planes"]);
});

test("with \"zzz\"", () => {
  expect(searchSongs(SONGS, "zzz")).toEqual([]);
});
