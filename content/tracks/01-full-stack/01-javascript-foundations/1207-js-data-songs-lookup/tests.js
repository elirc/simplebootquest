const SONGS = [
  {id: 1, title: "Gravity", seconds: 372, plays: 1476, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 154, plays: 3425, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Neon", seconds: 186, plays: 2766, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Velvet", seconds: 337, plays: 9533, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 250, plays: 7892, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Lanterns", seconds: 402, plays: 9508, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Tides", seconds: 243, plays: 5754, artist: "Nova", mood: "happy"},
  {id: 8, title: "Echoes", seconds: 260, plays: 6699, artist: "Kairo", mood: "happy"}
];

test("with \"Gravity\"", () => {
  expect(playsOf(SONGS, "Gravity")).toEqual(1476);
});

test("with \"Nope\"", () => {
  expect(playsOf(SONGS, "Nope")).toEqual(null);
});
