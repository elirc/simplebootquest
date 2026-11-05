test("with 5888, 7214", () => {
  expect(songsInRange(SONGS, 5888, 7214)).toEqual(["Halo","Paper Planes","Lanterns"]);
});

test("with 7214, 7232", () => {
  expect(songsInRange(SONGS, 7214, 7232)).toEqual(["Static","Halo"]);
});

test("with 5888, 5888", () => {
  expect(songsInRange(SONGS, 5888, 5888)).toEqual(["Paper Planes"]);
});
