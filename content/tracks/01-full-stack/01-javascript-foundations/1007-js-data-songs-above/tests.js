const SONGS = [
  {id: 1, title: "Lanterns", seconds: 264, plays: 9711, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Echoes", seconds: 152, plays: 1835, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Velvet", seconds: 351, plays: 2493, artist: "Nova", mood: "dark"},
  {id: 4, title: "Paper Planes", seconds: 251, plays: 3440, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Drift", seconds: 166, plays: 8365, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 166, plays: 7456, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Neon", seconds: 289, plays: 6084, artist: "Nova", mood: "dark"},
  {id: 8, title: "Halo", seconds: 267, plays: 7760, artist: "Kairo", mood: "dark"}
];

test("with 166", () => {
  expect(songsAbove(SONGS, 166)).toEqual(["Lanterns","Velvet","Paper Planes","Neon","Halo"]);
});

test("with 264", () => {
  expect(songsAbove(SONGS, 264)).toEqual(["Velvet","Neon","Halo"]);
});

test("with 999999", () => {
  expect(songsAbove(SONGS, 999999)).toEqual([]);
});
