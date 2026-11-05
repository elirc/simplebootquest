const SONGS = [
  {id: 1, title: "Sunrise", seconds: 373, plays: 2929, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Riverside", seconds: 240, plays: 5996, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 133, plays: 1928, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Tides", seconds: 254, plays: 86, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Paper Planes", seconds: 306, plays: 8699, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Neon", seconds: 317, plays: 674, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 224, plays: 186, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 285, plays: 808, artist: "Kairo", mood: "calm"}
];

test("an empty list", () => {
  expect(secondsPerArtist([])).toEqual({});
});

test("all songs", () => {
  expect(secondsPerArtist(SONGS)).toEqual({"The Pines":690,"Nova":240,"Kairo":1202});
});
