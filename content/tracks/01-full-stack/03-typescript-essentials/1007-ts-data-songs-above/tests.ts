const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 242, plays: 4103, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Echoes", seconds: 254, plays: 337, artist: "Nova", mood: "dark"},
  {id: 3, title: "Sunrise", seconds: 250, plays: 1525, artist: "Nova", mood: "happy"},
  {id: 4, title: "Static", seconds: 233, plays: 4548, artist: "The Pines", mood: "dark"},
  {id: 5, title: "Drift", seconds: 156, plays: 1856, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Velvet", seconds: 228, plays: 388, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 369, plays: 349, artist: "Nova", mood: "calm"},
  {id: 8, title: "Tides", seconds: 351, plays: 9750, artist: "Nova", mood: "happy"}
];

test("with 233", () => {
  expect(songsAbove(SONGS, 233)).toEqual(["Paper Planes","Echoes","Sunrise","Lanterns","Tides"]);
});

test("with 250", () => {
  expect(songsAbove(SONGS, 250)).toEqual(["Echoes","Lanterns","Tides"]);
});

test("with 999999", () => {
  expect(songsAbove(SONGS, 999999)).toEqual([]);
});
