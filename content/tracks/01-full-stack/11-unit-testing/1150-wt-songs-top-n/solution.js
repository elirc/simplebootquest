test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  topSongsBySeconds(SONGS, 1);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("with 1", () => {
  expect(topSongsBySeconds(SONGS, 1)).toEqual(["Lanterns"]);
});

test("with 3", () => {
  expect(topSongsBySeconds(SONGS, 3)).toEqual(["Lanterns","Gravity","Echoes"]);
});

test("with 0", () => {
  expect(topSongsBySeconds(SONGS, 0)).toEqual([]);
});
