const SONGS = [
  {id: 1, title: "Echoes", seconds: 198, plays: 7654, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Paper Planes", seconds: 291, plays: 9548, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Sunrise", seconds: 277, plays: 7230, artist: "Nova", mood: "calm"},
  {id: 4, title: "Neon", seconds: 176, plays: 8715, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Tides", seconds: 176, plays: 3229, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Velvet", seconds: 196, plays: 1953, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Drift", seconds: 406, plays: 8203, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 391, plays: 9713, artist: "Kairo", mood: "happy"}
];

test("an empty list", () => {
  expect(lowestPlays([])).toEqual(null);
});

test("all songs", () => {
  expect(lowestPlays(SONGS)).toEqual("Velvet");
});
