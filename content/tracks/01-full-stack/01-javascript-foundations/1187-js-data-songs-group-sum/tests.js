const SONGS = [
  {id: 1, title: "Riverside", seconds: 127, plays: 1327, artist: "Nova", mood: "dark"},
  {id: 2, title: "Static", seconds: 220, plays: 8222, artist: "Nova", mood: "calm"},
  {id: 3, title: "Neon", seconds: 244, plays: 3384, artist: "Nova", mood: "calm"},
  {id: 4, title: "Paper Planes", seconds: 359, plays: 4076, artist: "Nova", mood: "dark"},
  {id: 5, title: "Lanterns", seconds: 261, plays: 9188, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Sunrise", seconds: 320, plays: 7311, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Drift", seconds: 192, plays: 5980, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Velvet", seconds: 417, plays: 4644, artist: "Kairo", mood: "happy"}
];

test("an empty list", () => {
  expect(secondsPerMood([])).toEqual({});
});

test("all songs", () => {
  expect(secondsPerMood(SONGS)).toEqual({"dark":678,"calm":784,"happy":678});
});
