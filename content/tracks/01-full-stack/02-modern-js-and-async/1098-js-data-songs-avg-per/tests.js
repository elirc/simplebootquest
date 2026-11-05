const SONGS = [
  {id: 1, title: "Drift", seconds: 196, plays: 9329, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Velvet", seconds: 313, plays: 3483, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Lanterns", seconds: 262, plays: 6102, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Gravity", seconds: 155, plays: 2553, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Riverside", seconds: 327, plays: 5013, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Halo", seconds: 403, plays: 5422, artist: "Nova", mood: "dark"},
  {id: 7, title: "Paper Planes", seconds: 268, plays: 1480, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Static", seconds: 276, plays: 8257, artist: "The Pines", mood: "calm"}
];

test("an empty list", () => {
  expect(averageSecondsPerMood([])).toEqual({});
});

test("all songs", () => {
  expect(averageSecondsPerMood(SONGS)).toEqual({"dark":300,"calm":295,"happy":253});
});
