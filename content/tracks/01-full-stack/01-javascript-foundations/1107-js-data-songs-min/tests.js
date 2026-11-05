const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 373, plays: 9500, artist: "Nova", mood: "dark"},
  {id: 2, title: "Drift", seconds: 336, plays: 6101, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Tides", seconds: 291, plays: 6812, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Riverside", seconds: 192, plays: 1731, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Gravity", seconds: 239, plays: 3654, artist: "Nova", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 176, plays: 3688, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Static", seconds: 193, plays: 4083, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Echoes", seconds: 160, plays: 2619, artist: "The Pines", mood: "dark"}
];

test("an empty list", () => {
  expect(lowestSeconds([])).toEqual(null);
});

test("all songs", () => {
  expect(lowestSeconds(SONGS)).toEqual("Echoes");
});
