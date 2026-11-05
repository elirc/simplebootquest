const SONGS = [
  {id: 1, title: "Drift", seconds: 336, plays: 534, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Riverside", seconds: 147, plays: 2173, artist: "Nova", mood: "calm"},
  {id: 3, title: "Tides", seconds: 228, plays: 2940, artist: "The Pines", mood: "happy"},
  {id: 4, title: "Paper Planes", seconds: 364, plays: 1896, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Echoes", seconds: 365, plays: 6576, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Halo", seconds: 288, plays: 5828, artist: "Nova", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 398, plays: 2237, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Neon", seconds: 242, plays: 7152, artist: "The Pines", mood: "happy"}
];

test("an empty list", () => {
  expect(totalPlays([])).toEqual(0);
});

test("all songs", () => {
  expect(totalPlays(SONGS)).toEqual(29336);
});
