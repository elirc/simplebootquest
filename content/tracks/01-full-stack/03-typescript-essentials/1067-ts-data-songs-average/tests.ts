const SONGS = [
  {id: 1, title: "Static", seconds: 160, plays: 5522, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Tides", seconds: 190, plays: 2551, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Riverside", seconds: 129, plays: 3760, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Paper Planes", seconds: 177, plays: 1365, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 205, plays: 8349, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Gravity", seconds: 330, plays: 9774, artist: "Nova", mood: "happy"},
  {id: 7, title: "Echoes", seconds: 210, plays: 9770, artist: "Nova", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 200, plays: 6158, artist: "Kairo", mood: "calm"}
];

test("an empty list", () => {
  expect(averageSeconds([])).toEqual(null);
});

test("all songs", () => {
  expect(averageSeconds(SONGS)).toEqual(200.1);
});
