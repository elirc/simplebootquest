const SONGS = [
  {id: 1, title: "Static", seconds: 122, plays: 5431, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Lanterns", seconds: 264, plays: 2299, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Halo", seconds: 417, plays: 8868, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Riverside", seconds: 254, plays: 7985, artist: "Kairo", mood: "happy"},
  {id: 5, title: "Sunrise", seconds: 310, plays: 2325, artist: "Nova", mood: "calm"},
  {id: 6, title: "Paper Planes", seconds: 362, plays: 2961, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 192, plays: 5065, artist: "Nova", mood: "happy"},
  {id: 8, title: "Gravity", seconds: 250, plays: 4014, artist: "The Pines", mood: "dark"}
];

test("with 2961", () => {
  expect(allSongsUnder(SONGS, 2961)).toEqual(false);
});

test("with 8869", () => {
  expect(allSongsUnder(SONGS, 8869)).toEqual(true);
});

test("with 8868", () => {
  expect(allSongsUnder(SONGS, 8868)).toEqual(false);
});
