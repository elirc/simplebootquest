const SONGS = [
  {id: 1, title: "Neon", seconds: 249, plays: 4717, artist: "Nova", mood: "happy"},
  {id: 2, title: "Echoes", seconds: 369, plays: 4201, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 204, plays: 6384, artist: "Nova", mood: "calm"},
  {id: 4, title: "Paper Planes", seconds: 287, plays: 1753, artist: "Nova", mood: "happy"},
  {id: 5, title: "Tides", seconds: 405, plays: 4464, artist: "Nova", mood: "calm"},
  {id: 6, title: "Gravity", seconds: 159, plays: 60, artist: "Nova", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 406, plays: 7291, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Riverside", seconds: 180, plays: 3750, artist: "The Pines", mood: "happy"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  topSongsBySeconds(SONGS, 1);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("with 1", () => {
  expect(topSongsBySeconds(SONGS, 1)).toEqual(["Lanterns"]);
});

test("with 3", () => {
  expect(topSongsBySeconds(SONGS, 3)).toEqual(["Lanterns","Tides","Echoes"]);
});

test("with 0", () => {
  expect(topSongsBySeconds(SONGS, 0)).toEqual([]);
});
