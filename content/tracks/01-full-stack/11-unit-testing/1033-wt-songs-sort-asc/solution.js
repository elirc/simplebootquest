test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  songsByPlays(SONGS);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("all songs", () => {
  expect(songsByPlays(SONGS)).toEqual(["Halo","Velvet","Static","Riverside","Sunrise","Lanterns","Echoes","Paper Planes"]);
});
