const SONGS = [
  {id: 1, title: "Riverside", seconds: 339, plays: 2657, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Drift", seconds: 278, plays: 5438, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Velvet", seconds: 263, plays: 9375, artist: "Nova", mood: "happy"},
  {id: 4, title: "Tides", seconds: 143, plays: 7071, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Static", seconds: 128, plays: 367, artist: "Nova", mood: "calm"},
  {id: 6, title: "Paper Planes", seconds: 176, plays: 4058, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Echoes", seconds: 335, plays: 6539, artist: "Nova", mood: "happy"},
  {id: 8, title: "Halo", seconds: 247, plays: 5957, artist: "Nova", mood: "calm"}
];

test("an empty list", () => {
  expect(totalSeconds([])).toEqual(0);
});

test("all songs", () => {
  expect(totalSeconds(SONGS)).toEqual(1909);
});
