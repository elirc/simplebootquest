const SONGS = [
  {id: 1, title: "Sunrise", seconds: 279, plays: 1721, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Static", seconds: 290, plays: 1429, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Riverside", seconds: 362, plays: 1172, artist: "Nova", mood: "happy"},
  {id: 4, title: "Drift", seconds: 127, plays: 8297, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Paper Planes", seconds: 150, plays: 4944, artist: "The Pines", mood: "dark"},
  {id: 6, title: "Lanterns", seconds: 142, plays: 6429, artist: "Nova", mood: "happy"},
  {id: 7, title: "Neon", seconds: 261, plays: 2719, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 226, plays: 9083, artist: "Kairo", mood: "dark"}
];

test("with 1", () => {
  expect(nthByPlays(SONGS, 1)).toEqual("Velvet");
});

test("with 2", () => {
  expect(nthByPlays(SONGS, 2)).toEqual("Drift");
});

test("with 5", () => {
  expect(nthByPlays(SONGS, 5)).toEqual("Neon");
});

test("with 0", () => {
  expect(nthByPlays(SONGS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPlays(SONGS, 99)).toEqual(null);
});
