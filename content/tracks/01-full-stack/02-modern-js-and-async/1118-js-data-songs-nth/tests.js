const SONGS = [
  {id: 1, title: "Halo", seconds: 211, plays: 2420, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Riverside", seconds: 315, plays: 134, artist: "Nova", mood: "happy"},
  {id: 3, title: "Gravity", seconds: 205, plays: 5293, artist: "Nova", mood: "happy"},
  {id: 4, title: "Neon", seconds: 412, plays: 6005, artist: "The Pines", mood: "dark"},
  {id: 5, title: "Tides", seconds: 326, plays: 3191, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Sunrise", seconds: 278, plays: 7774, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Static", seconds: 245, plays: 3098, artist: "Nova", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 280, plays: 7176, artist: "Kairo", mood: "happy"}
];

test("with 1", () => {
  expect(nthByPlays(SONGS, 1)).toEqual("Sunrise");
});

test("with 2", () => {
  expect(nthByPlays(SONGS, 2)).toEqual("Lanterns");
});

test("with 5", () => {
  expect(nthByPlays(SONGS, 5)).toEqual("Tides");
});

test("with 0", () => {
  expect(nthByPlays(SONGS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPlays(SONGS, 99)).toEqual(null);
});
