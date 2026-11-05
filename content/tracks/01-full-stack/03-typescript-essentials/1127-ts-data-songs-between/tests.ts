const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 278, plays: 7048, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Lanterns", seconds: 244, plays: 1558, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Drift", seconds: 374, plays: 8742, artist: "Nova", mood: "dark"},
  {id: 4, title: "Static", seconds: 291, plays: 9344, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Tides", seconds: 155, plays: 941, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Halo", seconds: 330, plays: 5684, artist: "Nova", mood: "dark"},
  {id: 7, title: "Velvet", seconds: 167, plays: 8550, artist: "Nova", mood: "happy"},
  {id: 8, title: "Riverside", seconds: 416, plays: 6283, artist: "The Pines", mood: "calm"}
];

test("with 244, 291", () => {
  expect(songsInRange(SONGS, 244, 291)).toEqual(["Paper Planes","Lanterns","Static"]);
});

test("with 291, 330", () => {
  expect(songsInRange(SONGS, 291, 330)).toEqual(["Static","Halo"]);
});

test("with 244, 244", () => {
  expect(songsInRange(SONGS, 244, 244)).toEqual(["Lanterns"]);
});
