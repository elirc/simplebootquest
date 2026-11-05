const SONGS = [
  {id: 1, title: "Echoes", seconds: 275, plays: 309, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Static", seconds: 166, plays: 7997, artist: "Nova", mood: "happy"},
  {id: 3, title: "Riverside", seconds: 295, plays: 8783, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Gravity", seconds: 302, plays: 7335, artist: "Nova", mood: "calm"},
  {id: 5, title: "Lanterns", seconds: 169, plays: 3102, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Drift", seconds: 405, plays: 1326, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Tides", seconds: 232, plays: 9437, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Paper Planes", seconds: 264, plays: 2417, artist: "Nova", mood: "happy"}
];

test("with \"calm\"", () => {
  expect(countSongsByMood(SONGS, "calm")).toEqual(2);
});

test("with \"happy\"", () => {
  expect(countSongsByMood(SONGS, "happy")).toEqual(3);
});

test("with \"dark\"", () => {
  expect(countSongsByMood(SONGS, "dark")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countSongsByMood(SONGS, "nope")).toEqual(0);
});
