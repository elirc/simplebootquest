const SONGS = [
  {id: 1, title: "Neon", seconds: 218, plays: 7618, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Halo", seconds: 194, plays: 5187, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Velvet", seconds: 287, plays: 6744, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Gravity", seconds: 135, plays: 1560, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Paper Planes", seconds: 240, plays: 6945, artist: "The Pines", mood: "dark"},
  {id: 6, title: "Echoes", seconds: 123, plays: 5058, artist: "Nova", mood: "happy"},
  {id: 7, title: "Tides", seconds: 273, plays: 1512, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Static", seconds: 266, plays: 2046, artist: "Nova", mood: "dark"}
];

test("an empty list", () => {
  expect(averageSeconds([])).toEqual(null);
});

test("all songs", () => {
  expect(averageSeconds(SONGS)).toEqual(217);
});
