const SONGS = [
  {id: 1, title: "Gravity", seconds: 158, plays: 6738, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Neon", seconds: 365, plays: 1122, artist: "Nova", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 237, plays: 7077, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Static", seconds: 189, plays: 332, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 222, plays: 2247, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Paper Planes", seconds: 322, plays: 4052, artist: "Nova", mood: "calm"},
  {id: 7, title: "Tides", seconds: 180, plays: 518, artist: "Nova", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 295, plays: 5892, artist: "Nova", mood: "dark"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  topSongsByPlays(SONGS, 1);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("with 1", () => {
  expect(topSongsByPlays(SONGS, 1)).toEqual(["Echoes"]);
});

test("with 3", () => {
  expect(topSongsByPlays(SONGS, 3)).toEqual(["Echoes","Gravity","Velvet"]);
});

test("with 0", () => {
  expect(topSongsByPlays(SONGS, 0)).toEqual([]);
});
