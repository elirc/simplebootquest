const SONGS = [
  {id: 1, title: "Riverside", seconds: 248, plays: 5558, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 348, plays: 3134, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Paper Planes", seconds: 382, plays: 9539, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Velvet", seconds: 199, plays: 7460, artist: "Nova", mood: "happy"},
  {id: 5, title: "Drift", seconds: 159, plays: 8433, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 323, plays: 4004, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 232, plays: 1595, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 215, plays: 1438, artist: "The Pines", mood: "happy"}
];

test("an empty list", () => {
  expect(totalPlays([])).toEqual(0);
});

test("all songs", () => {
  expect(totalPlays(SONGS)).toEqual(41161);
});
