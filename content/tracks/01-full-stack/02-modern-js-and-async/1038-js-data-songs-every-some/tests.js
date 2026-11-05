const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 313, plays: 4669, artist: "Nova", mood: "calm"},
  {id: 2, title: "Echoes", seconds: 360, plays: 6048, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Static", seconds: 358, plays: 650, artist: "Nova", mood: "calm"},
  {id: 4, title: "Gravity", seconds: 327, plays: 1687, artist: "Nova", mood: "calm"},
  {id: 5, title: "Velvet", seconds: 153, plays: 745, artist: "Nova", mood: "calm"},
  {id: 6, title: "Halo", seconds: 371, plays: 4252, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Riverside", seconds: 281, plays: 2647, artist: "Nova", mood: "happy"},
  {id: 8, title: "Drift", seconds: 282, plays: 1512, artist: "Kairo", mood: "happy"}
];

test("with 1512", () => {
  expect(allSongsUnder(SONGS, 1512)).toEqual(false);
});

test("with 6049", () => {
  expect(allSongsUnder(SONGS, 6049)).toEqual(true);
});

test("with 6048", () => {
  expect(allSongsUnder(SONGS, 6048)).toEqual(false);
});
