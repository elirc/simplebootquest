const SONGS = [
  {id: 1, title: "Gravity", seconds: 251, plays: 209, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Drift", seconds: 310, plays: 8278, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Echoes", seconds: 341, plays: 6522, artist: "The Pines", mood: "happy"},
  {id: 4, title: "Lanterns", seconds: 320, plays: 8581, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Neon", seconds: 362, plays: 1645, artist: "Nova", mood: "calm"},
  {id: 6, title: "Velvet", seconds: 252, plays: 1214, artist: "Nova", mood: "happy"},
  {id: 7, title: "Paper Planes", seconds: 332, plays: 3386, artist: "Nova", mood: "happy"},
  {id: 8, title: "Static", seconds: 219, plays: 7620, artist: "The Pines", mood: "happy"}
];

test("an empty list", () => {
  expect(countSongsPerMood([])).toEqual({});
});

test("all songs", () => {
  expect(countSongsPerMood(SONGS)).toEqual({"dark":1,"calm":3,"happy":4});
});
