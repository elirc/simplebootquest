test("with \"Nova\"", () => {
  expect(songsInArtistRanked(SONGS, "Nova")).toEqual(["Static","Paper Planes","Neon","Riverside"]);
});

test("with \"The Pines\"", () => {
  expect(songsInArtistRanked(SONGS, "The Pines")).toEqual([]);
});

test("with \"Kairo\"", () => {
  expect(songsInArtistRanked(SONGS, "Kairo")).toEqual(["Echoes","Drift","Lanterns","Velvet"]);
});
