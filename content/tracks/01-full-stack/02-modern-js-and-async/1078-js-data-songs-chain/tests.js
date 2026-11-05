const SONGS = [
  {id: 1, title: "Lanterns", seconds: 414, plays: 368, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Tides", seconds: 173, plays: 1666, artist: "Nova", mood: "happy"},
  {id: 3, title: "Static", seconds: 374, plays: 8290, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Echoes", seconds: 344, plays: 7309, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Drift", seconds: 322, plays: 8776, artist: "Nova", mood: "happy"},
  {id: 6, title: "Neon", seconds: 207, plays: 6375, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Paper Planes", seconds: 122, plays: 7513, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Sunrise", seconds: 291, plays: 8257, artist: "Nova", mood: "dark"}
];

test("with \"Nova\"", () => {
  expect(songsInArtistRanked(SONGS, "Nova")).toEqual(["Drift","Sunrise","Tides"]);
});

test("with \"The Pines\"", () => {
  expect(songsInArtistRanked(SONGS, "The Pines")).toEqual(["Paper Planes","Neon"]);
});

test("with \"Kairo\"", () => {
  expect(songsInArtistRanked(SONGS, "Kairo")).toEqual(["Static","Echoes","Lanterns"]);
});
