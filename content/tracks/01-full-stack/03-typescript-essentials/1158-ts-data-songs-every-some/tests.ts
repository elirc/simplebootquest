const SONGS = [
  {id: 1, title: "Sunrise", seconds: 121, plays: 2017, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Velvet", seconds: 391, plays: 8046, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Gravity", seconds: 409, plays: 7784, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Lanterns", seconds: 378, plays: 8120, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Riverside", seconds: 286, plays: 2740, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Drift", seconds: 303, plays: 6507, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Paper Planes", seconds: 311, plays: 9622, artist: "Kairo", mood: "happy"},
  {id: 8, title: "Static", seconds: 358, plays: 4497, artist: "The Pines", mood: "calm"}
];

test("with 4497", () => {
  expect(allSongsUnder(SONGS, 4497)).toEqual(false);
});

test("with 9623", () => {
  expect(allSongsUnder(SONGS, 9623)).toEqual(true);
});

test("with 9622", () => {
  expect(allSongsUnder(SONGS, 9622)).toEqual(false);
});
