const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 217, plays: 2456, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 235, plays: 3864, artist: "Nova", mood: "calm"},
  {id: 3, title: "Drift", seconds: 190, plays: 2221, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Tides", seconds: 158, plays: 4367, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Static", seconds: 141, plays: 7445, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Echoes", seconds: 340, plays: 3616, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Neon", seconds: 194, plays: 8491, artist: "The Pines", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 125, plays: 2229, artist: "Kairo", mood: "dark"}
];

test("an empty list", () => {
  expect(countSongsPerArtist([])).toEqual({});
});

test("all songs", () => {
  expect(countSongsPerArtist(SONGS)).toEqual({"The Pines":3,"Nova":1,"Kairo":4});
});
