const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 285, plays: 4141, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Halo", seconds: 350, plays: 6930, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 179, plays: 7798, artist: "Nova", mood: "dark"},
  {id: 4, title: "Tides", seconds: 170, plays: 8301, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Neon", seconds: 334, plays: 5340, artist: "Nova", mood: "calm"},
  {id: 6, title: "Lanterns", seconds: 148, plays: 6960, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Drift", seconds: 375, plays: 5701, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 268, plays: 7102, artist: "Kairo", mood: "calm"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  songsBySeconds(SONGS);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("all songs", () => {
  expect(songsBySeconds(SONGS)).toEqual(["Lanterns","Tides","Echoes","Gravity","Paper Planes","Neon","Halo","Drift"]);
});
