const SONGS = [
  {id: 1, title: "Lanterns", seconds: 304, plays: 3348, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Drift", seconds: 313, plays: 3402, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Paper Planes", seconds: 184, plays: 7944, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Neon", seconds: 183, plays: 8218, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 287, plays: 1293, artist: "Nova", mood: "calm"},
  {id: 6, title: "Echoes", seconds: 319, plays: 7108, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Tides", seconds: 277, plays: 5817, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Velvet", seconds: 264, plays: 1212, artist: "The Pines", mood: "dark"}
];

test("with \"calm\"", () => {
  expect(songsInMoodRanked(SONGS, "calm")).toEqual(["Paper Planes","Static"]);
});

test("with \"happy\"", () => {
  expect(songsInMoodRanked(SONGS, "happy")).toEqual(["Neon","Echoes","Lanterns"]);
});

test("with \"dark\"", () => {
  expect(songsInMoodRanked(SONGS, "dark")).toEqual(["Tides","Drift","Velvet"]);
});
