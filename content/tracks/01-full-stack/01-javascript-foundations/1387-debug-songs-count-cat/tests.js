const SONGS = [
  {id: 1, title: "Static", seconds: 175, plays: 1257, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Gravity", seconds: 175, plays: 5167, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Drift", seconds: 275, plays: 7192, artist: "Nova", mood: "calm"},
  {id: 4, title: "Halo", seconds: 346, plays: 4626, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Neon", seconds: 363, plays: 5524, artist: "Nova", mood: "dark"},
  {id: 6, title: "Tides", seconds: 155, plays: 4437, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Lanterns", seconds: 379, plays: 9058, artist: "Nova", mood: "dark"},
  {id: 8, title: "Paper Planes", seconds: 323, plays: 280, artist: "Kairo", mood: "dark"}
];

test("with \"Nova\"", () => {
  expect(countSongsByArtist(SONGS, "Nova")).toEqual(3);
});

test("with \"The Pines\"", () => {
  expect(countSongsByArtist(SONGS, "The Pines")).toEqual(2);
});

test("with \"Kairo\"", () => {
  expect(countSongsByArtist(SONGS, "Kairo")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countSongsByArtist(SONGS, "nope")).toEqual(0);
});
